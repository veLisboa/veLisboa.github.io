---
title: "Redshift + Fabric serving"
num: "07"
subtitle: "The loosest-coupled of the four. There is no native Fabric mirroring for Amazon Redshift — integration runs through S3 shortcuts or the Power BI connector."
summary: "Every option is a compromise. Highest network and egress friction of the four hybrids, and the weakest long-term case if a migration is on the table."
group: hybrids
diagram: /data-architecture-diagrams/07-redshift-lakehouse-fabric-serving.png
order: 7
---

## The split

AWS keeps the lakehouse — Zero-ETL integrations, Glue ETL, EMR, and Redshift with Spectrum
querying S3 in place — over S3 Tables and SageMaker Lakehouse, governed by the Glue Data Catalog
and Lake Formation. Fabric serves.

## Bridge options, ranked

There is no CDC mirroring for Redshift, so every option is a compromise. Choose deliberately.

1–2. **OneLake shortcuts to S3 or S3 Tables** give you OneLake and Direct Lake benefits, but only
for open-format data actually landed in S3 — not for live Redshift internal tables. Confirm
current support level for the S3 Tables catalog specifically.

3. **The Power BI Redshift connector** gives live access but no OneLake single-copy benefit. In a
private VPC it needs an on-premises data gateway on EC2, or AWS PrivateLink with the private
endpoint DNS name and SSL. Public access requires allow-listing Power BI IPs.

4. **Native Fabric mirroring** is not available for Redshift.

## When to choose this pattern

Data is committed to Redshift and the wider AWS estate, but reporting must be delivered in Power
BI to a Microsoft 365 audience.

The practical design is usually hybrid-of-the-hybrid: land curated gold data as Iceberg in S3
Tables for the OneLake shortcut path, and keep the Redshift connector only for the small number
of reports that genuinely need live warehouse access.

If a migration is on the table, this is the pattern with the weakest long-term case of the four.

## Watch-outs

Highest network and egress friction of the four hybrids, and the most governance duplication.
Budget for both explicitly.

Lake Formation permissions do not propagate to Fabric. Access control must be rebuilt with
OneLake security on the serving side.

Gateway or PrivateLink configuration is a real project dependency, not a detail — involve the
network team at design time rather than at deployment.
