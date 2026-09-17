---
title: "BigQuery + Fabric serving"
num: "05"
subtitle: "Google Cloud owns the lakehouse on BigLake Iceberg; Fabric serves. Cross-cloud egress, latency and CDC cost are the defining constraints."
summary: "Sensible when analytics already lives in BigQuery but the organisation is standardised on Power BI and Microsoft 365. The economics decide the bridge choice on their own."
group: hybrids
diagram: /data-architecture-diagrams/05-bigquery-lakehouse-fabric-serving.png
order: 5
---

## The split

Google Cloud keeps the lakehouse — BigQuery ELT, Dataproc or serverless Spark, Cloud Composer,
Vertex AI, over BigLake Iceberg on GCS, governed by the Dataplex Universal Catalog. Fabric takes
serving: OneLake, Direct Lake, the SQL analytics endpoint and the M365 distribution surface.

## Bridge options, ranked

1. **Mirroring for BigQuery** gives Direct Lake performance but duplicates data into OneLake and
   incurs BigQuery CDC, Storage Write and compute cost. It needs a GCS staging bucket in the same
   region. Fabric charges no ingress. Status is documented inconsistently by Microsoft — treat as
   Preview until the dedicated Learn page drops the label.
2. **A OneLake shortcut to GCS** avoids duplication and reads Iceberg in place. File caching
   materially reduces repeated egress.
3. **The Power BI BigQuery connector** avoids copies entirely but is the slowest path and bills
   live BigQuery compute on every query.

## When to choose this pattern

Analytics data already lives in BigQuery — often because the wider business runs on Google Cloud
— but the organisation is standardised on Power BI and Microsoft 365 for distribution.

Also a sensible interim state during a cloud migration in either direction: serving can move to
Fabric long before the lakehouse does.

Avoid it when latency budgets are tight and the data volumes crossing clouds are large. The
economics deteriorate quickly.

## Watch-outs

Cross-cloud egress, latency and cost are the central caveat. Model them explicitly before
committing; they usually decide the bridge choice on their own.

Governance duplicates: Dataplex governs the GCP side, OneLake and Purview govern the Fabric side.
Neither propagates to the other.

Verify current mirroring status and regional constraints on Microsoft Learn at the time you
design — this integration is moving fast.
