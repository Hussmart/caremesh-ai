# CareMesh AI FAQ

## What is CareMesh AI?

CareMesh AI is a multi-agent platform for general healthcare service coordination. It can organize patient records, prepare a factual status summary, retrieve configured research, and export a care summary. Optional agents support chest X-ray analysis and clinical-study search.

## Is it a medical device?

No. It is research and prototyping software. Outputs require review by appropriately qualified professionals and must not be used for emergencies, autonomous diagnosis, or autonomous treatment decisions.

## How do I start a care coordination review?

Mention the coordinator and provide a synthetic or authorized patient identifier:

`@Orchestrator prepare a care coordination summary for patient id patient_4`

Review the proposed plan before allowing the agents to continue.

## How do I clear the conversation?

Send:

`@Orchestrator clear`

## What data is included?

The repository includes synthetic sample records for development and demonstrations. Do not commit real protected health information or production credentials.

## Can I add or remove agents?

Yes. Update `src/scenarios/default/config/agents.yaml`, then set `EXCLUDED_AGENTS` for agents that should not be deployed. See [Agent Development](agent_development.md).

## Which data sources are supported?

Clinical notes can be loaded from Azure Blob Storage, an HL7 FHIR service, or Microsoft Fabric. See [Data Access](data_access.md).

## Why is an agent unavailable?

Some specialists require separate infrastructure. Radiology needs a compatible imaging-model endpoint, and MedicalResearch needs a configured GraphRAG index. They are excluded from the default deployment until configured.

## Where should I report a problem?

Open an issue in [the CareMesh AI repository](https://github.com/hsussmart/caremesh-ai/issues). Report security vulnerabilities privately according to [SECURITY.md](../SECURITY.md).
