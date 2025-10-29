# DUVA - Frontend

Everything about DUVA


## Getting started

I suggest using pnpm

`pnpm install`

`pnpm dev` -  for running frontend.

`chmod +x ./scripts/init-db.sh` - to make init-db script executable, for multi db setup in postgres.

`docker-compose up -d` - to start docker container with postgres and keycloak.

`http://localhost:8080` - UI for keycloak. User and Pass - admin - only for dev purpose.

`http://localhost:8000/graphql` - Graphql endpoint.


## Created GraphQL Operation Files

1. forms.graphql

Queries (3):
- GetForm - Get single form by slug
- GetAllForms - List forms with filtering, pagination
- CheckFormSlug - Validate form slug uniqueness

Mutations (5):
- SaveForm - Create/update form
- CopyForm - Duplicate form
- AddFormQuestion - Add question to form
- RemoveFormQuestion - Remove question from form
- ReorderFormQuestions - Reorder questions in form

2. questions.graphql

Queries (3):
- GetAllQuestions - List all questions
- SearchQuestions - Search questions by text
- CheckQuestionSlug - Validate question slug uniqueness

Mutations (15):
- SaveTextQuestion - Text input field
- SaveTextareaQuestion - Multi-line text
- SaveIntegerQuestion - Integer number field
- SaveFloatQuestion - Decimal number field
- SaveDateQuestion - Date picker
- SaveChoiceQuestion - Single choice (radio)
- SaveMultipleChoiceQuestion - Multiple choice (checkbox)
- SaveDynamicChoiceQuestion - Dynamic single choice
- SaveDynamicMultipleChoiceQuestion - Dynamic multiple choice
- SaveTableQuestion - Table/matrix question
- SaveFormQuestion - Nested form
- SaveFilesQuestion - File upload
- SaveStaticQuestion - Static content
- SaveCalculatedFloatQuestion - Calculated field
- SaveActionButtonQuestion - Action button
- CopyQuestion - Duplicate question

3. options.graphql

Queries (1):
- CheckOptionSlug - Validate option slug uniqueness

Mutations (2):
- SaveOption - Create/update choice option
- CopyOption - Duplicate option

4. documents.graphql

Queries (2):
- GetAllDocuments - List all documents
- GetDocument - Get single document with answers

Mutations (16):
- SaveDocument - Create/update document
- CopyDocument - Duplicate document
- RemoveDocument - Delete document
- SaveDocumentStringAnswer - Save text answer
- SaveDocumentIntegerAnswer - Save integer answer
- SaveDocumentFloatAnswer - Save float answer
- SaveDocumentDateAnswer - Save date answer
- SaveDocumentListAnswer - Save multiple choice answer
- SaveDocumentTableAnswer - Save table answer
- SaveDocumentFilesAnswer - Save file uploads
- RemoveAnswer - Delete answer
- SaveDefaultStringAnswer - Set default text value
- SaveDefaultIntegerAnswer - Set default integer value
- SaveDefaultFloatAnswer - Set default float value
- SaveDefaultDateAnswer - Set default date value
- SaveDefaultListAnswer - Set default list value
- SaveDefaultTableAnswer - Set default table value
- RemoveDefaultAnswer - Remove default answer

5. workflow.graphql

Queries (2):
- GetAllWorkItems - List work items (tasks)
- GetWorkItemStatus - Check work item status

Mutations (3):
- CompleteWorkItem - Mark work item complete
- CancelWorkItem - Cancel work item
- SkipWorkItem - Skip work item

6. utilities.graphql

Queries (3):
- GetAllFormatValidators - Get available validators
- GetAllDataSources - Get available data sources
- CheckDocumentValidity - Validate document completeness
