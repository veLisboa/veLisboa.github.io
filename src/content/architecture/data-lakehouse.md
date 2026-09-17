---
title: "Data lakehouse"
num: "01"
subtitle: "Vendor-neutral pattern: open table format on object storage, ACID transactions, medallion zoning, one copy for BI and AI."
summary: "The vendor-neutral baseline. One open copy on cheap object storage replaces the two-tier lake plus warehouse stack — and every box here maps to a concrete service in the six architectures that follow."
group: foundations
diagram: /data-architecture-diagrams/01-data-lakehouse-reference-architecture.png
order: 1
---

## Why the lakehouse

One open copy of data on cheap object storage replaces the two-tier lake + warehouse stack.
Open table formats — Delta Lake, Apache Iceberg, Apache Hudi — add ACID transactions, schema
enforcement and time travel on top of Parquet, so BI and ML read the same governed tables
without a second copy.

## The shape

Sources land through batch ELT, CDC replication or streaming ingest into an object store with an
ACID layer, zoned bronze → silver → gold. Every engine reads and writes every zone. Distributed
compute, a SQL query engine and ML pipelines sit on top of the same tables; a semantic layer and
a SQL serving endpoint feed dashboards, ad-hoc analysis, data science and LLM applications.

Two bands run underneath the whole thing rather than beside it: **catalog and governance**
(technical catalog, lineage, access control, data quality, audit) and **orchestration and
observability** (scheduling, dependencies, SLAs, cost and pipeline monitoring).

## When to choose this pattern

Default for greenfield platforms serving both analytics and AI.

Choose a pure warehouse instead when workloads are exclusively SQL BI on structured data and
open-format portability is not a requirement. Choose a plain data lake only for cheap archival
where transactional guarantees genuinely do not matter.
