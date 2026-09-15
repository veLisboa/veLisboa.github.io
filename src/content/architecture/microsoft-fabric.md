---
title: "Microsoft Fabric, end to end"
num: "02"
subtitle: "Single SaaS platform: OneLake as the one copy, Delta Parquet throughout, Direct Lake semantic models as the serving tier."
summary: "One SaaS platform, one bill, one governance plane. The trade-off is capacity-based sizing and a younger engineering surface than a dedicated Spark platform."
group: foundations
diagram: /data-architecture-diagrams/02-microsoft-fabric-reference-architecture.png
order: 2
status: real
---

## The shape

Sources reach OneLake through Data Factory pipelines, Dataflows Gen2, mirroring, shortcuts or
Eventstream. OneLake holds one copy: a Lakehouse for bronze and silver, a Warehouse for gold with
full T-SQL and row-level security, an Eventhouse for real-time, and SQL Database in Fabric for
OLTP that is auto-mirrored back into OneLake.

Transformation is Spark notebooks, warehouse procedures, Dataflows Gen2 and Eventstream
processors. Serving is the Direct Lake semantic model reading Delta with no import, a SQL
analytics endpoint, Data Activator and a GraphQL API. Consumption runs out to Power BI,
real-time dashboards, Copilot and data agents, Excel, Teams and M365, and data science notebooks.

Governance is the OneLake catalog plus Microsoft Purview — domains, workspaces, endorsements,
lineage, sensitivity labels, DLP and OneLake security at table, column and row level. The
platform band underneath is capacities, Git integration and deployment pipelines, with the
workspace as the primary access boundary.

## The topology Microsoft recommends

Lakehouse for bronze and silver, Warehouse for gold — so row-level security can be applied at the
serving layer. Separate Dev, Test and Prod workspaces promoted through deployment pipelines with
Git.

**Licensing note:** below F64, report consumers still need Pro or PPU. Free-license viewing
unlocks at F64 and above.

## When to choose this pattern

Organisations standardised on Microsoft 365 and Power BI that want one SaaS platform, one bill
and one governance plane.

The trade-off is capacity-based sizing and a younger engineering surface than a dedicated Spark
platform. Direct Lake falls back to DirectQuery when capacity guardrails are exceeded or
unsupported features are used.
