---
title: "Databricks + Fabric serving"
num: "04"
subtitle: "Databricks owns ingestion, storage and transformation; Fabric owns the semantic and consumption tier. Tightest of the four hybrids — GA end to end."
summary: "The lowest-friction hybrid available today, and the only one where both vendors actively co-engineer the integration."
group: hybrids
diagram: /data-architecture-diagrams/04-databricks-lakehouse-fabric-serving.png
order: 4
---

## The split

Databricks keeps ingestion, Delta Lake on ADLS Gen2, and transformation. Fabric takes the
semantic and consumption tier: OneLake, a Direct Lake semantic model, a SQL analytics endpoint,
Data Activator, and the whole Power BI and M365 distribution surface. Unity Catalog governs the
Databricks side; the OneLake catalog and Purview govern the Fabric side.

## Bridge options, ranked

1. **Mirrored Unity Catalog** is the recommended default. It mirrors metadata only — Fabric
   creates OneLake shortcuts to the Delta files in ADLS. No data movement, no Databricks compute
   needed, and a SQL analytics endpoint is generated automatically.
2. **A plain OneLake shortcut** suits table-level control rather than whole-catalog mirroring.
3. **Publish to Fabric from Unity Catalog**, and **4. UC managed tables written into OneLake**,
   are preview paths. Option 4 is the strategic one: Databricks writes Unity Catalog managed
   tables directly into OneLake, so one physical copy serves both platforms.

## When to choose this pattern

The organisation already runs Azure Databricks for data engineering, streaming and production
ML, and wants best-in-class Power BI serving without rebuilding a second ETL stack inside Fabric.

You keep Databricks' engineering depth and Unity Catalog lineage, and gain Direct Lake
performance plus M365 distribution — on one copy of the Delta tables.

## Watch-outs

Unity Catalog permissions do **not** carry into Fabric. You re-apply access control with OneLake
security — plan for two policy planes and a reconciliation process.

Direct Lake needs well-maintained Delta tables and an F-SKU capacity. It falls back to
DirectQuery when capacity guardrails are exceeded or unsupported features are used; tables built
on T-SQL views always fall back.

Identity and passthrough behaviour differs across the four bridge options — validate before
committing.
