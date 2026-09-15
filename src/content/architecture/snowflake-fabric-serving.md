---
title: "Snowflake + Fabric serving"
num: "06"
subtitle: "Snowflake-managed Iceberg tables written natively into OneLake. Genuinely one copy, no data movement — GA since September 2025."
summary: "The strongest of the four when the estate is already Iceberg-first: no nightly extract, no duplicated storage, no drift between the warehouse and the semantic layer."
group: hybrids
diagram: /data-architecture-diagrams/06-snowflake-lakehouse-fabric-serving.png
order: 6
status: real
---

## The split

Snowflake keeps ingestion and transformation — Snowpipe and bulk load, Snowflake SQL ELT, Tasks
and Streams, Snowpark — over Snowflake-managed Iceberg tables, governed by the Horizon Catalog
built on Polaris. Fabric serves: OneLake, Direct Lake, SQL analytics endpoint, Data Activator and
the M365 surface.

## Bridge options, ranked

1. **Snowflake writing managed Iceberg tables natively into OneLake** is the strategic path. One
   physical copy, no movement, and Fabric's automatic Iceberg-to-Delta metadata translation means
   every Fabric engine — including Direct Lake — can read it.
2. **A OneLake shortcut to Iceberg data** already sitting in ADLS, S3 or GCS achieves the same
   read pattern for existing estates.
3. **Fabric mirroring for Snowflake** is supported and not in preview, though Microsoft's newer
   documentation reclassifies it as metadata mirroring rather than data replication. Snowflake
   views remain in preview.

## When to choose this pattern

Snowflake is the established enterprise warehouse or lakehouse and Power BI is the reporting
standard — a very common enterprise shape, and the reason both vendors co-announced this
integration.

You avoid the classic trade-off of this pairing: no nightly extract into a Power BI import model,
no duplicated storage, no drift between the warehouse and the semantic layer.

Strongest choice when the estate is already Iceberg-first.

## Watch-outs

Governance is split. Horizon governs Snowflake and its Iceberg tables; the OneLake catalog and
Purview govern the Fabric side. Masking and row access policies defined in Horizon do not follow
the data into Fabric.

Write-back from Fabric into Snowflake remains preview — treat Fabric as read-and-serve, not as a
writer, in production designs.

Check the mirroring classification in current documentation: it determines whether data is
replicated or referenced in place.
