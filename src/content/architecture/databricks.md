---
title: "Databricks Data Intelligence Platform"
num: "03"
subtitle: "Control plane / compute plane split, Delta Lake on customer object storage, Unity Catalog governing every asset."
summary: "Heavy engineering, streaming and production ML on one platform, with multi-cloud portability and open formats as a hard requirement. BI last-mile is usually still delegated elsewhere."
group: foundations
diagram: /data-architecture-diagrams/03-databricks-reference-architecture.png
order: 3
---

## The shape

Ingest is Lakeflow Connect, Auto Loader, Structured Streaming and Lakehouse Federation for
querying external SQL in place. Storage is Delta Lake on customer object storage, zoned bronze →
silver → gold, with every engine reading and writing every zone.

Transform is Lakeflow Declarative Pipelines — formerly Delta Live Tables — Apache Spark with
Photon, Lakeflow Jobs for orchestration across SQL, notebooks and dbt, and classic or serverless
compute in the customer VPC. Serving is Databricks SQL Warehouses, Mosaic AI Model Serving, and
in preview Unity Catalog metric views and Lakebase managed Postgres.

Unity Catalog governs everything — catalogs, schemas, tables, volumes, models, functions,
lineage, Delta Sharing, Marketplace, Clean Rooms and system tables. Underneath, the control plane
sits in the Databricks account and the compute plane in the customer's VPC or VNet, or serverless.

## The well-architected framework

Seven pillars: five shared with the cloud frameworks — operational excellence; security, privacy
and compliance; reliability; performance efficiency; cost optimisation — plus two
lakehouse-specific pillars: data and AI governance, and interoperability and usability.

## When to choose this pattern

Heavy data engineering, streaming and production ML on one platform, with multi-cloud
portability and open formats as a hard requirement.

The trade-off: BI last-mile and business-user self-service are typically still delegated to
Power BI or Tableau — which is exactly what architecture 04 formalises.
