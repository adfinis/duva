import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  FlowJexl: { input: any; output: any; }
  GenericScalar: { input: any; output: any; }
  GroupJexl: { input: any; output: any; }
  JSONString: { input: any; output: any; }
  QuestionJexl: { input: any; output: any; }
};

export type ActionButtonQuestion = Node & Question & {
  __typename?: 'ActionButtonQuestion';
  action: ButtonAction;
  color: ButtonColor;
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  forms?: Maybe<FormConnection>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  infoText?: Maybe<Scalars['String']['output']>;
  isArchived: Scalars['Boolean']['output'];
  isHidden: Scalars['QuestionJexl']['output'];
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl']['output'];
  label: Scalars['String']['output'];
  meta: Scalars['GenericScalar']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  showValidation: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  source?: Maybe<Question>;
  validateOnEnter: Scalars['Boolean']['output'];
};


export type ActionButtonQuestionFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<FormFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormOrderSetType>>>;
};

export type AddFormQuestionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  form: Scalars['ID']['input'];
  question: Scalars['ID']['input'];
};

/** Add question at the end of form. */
export type AddFormQuestionPayload = {
  __typename?: 'AddFormQuestionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  form?: Maybe<Form>;
};

export type AddWorkflowFlowInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  next: Scalars['FlowJexl']['input'];
  redoable?: InputMaybe<Scalars['FlowJexl']['input']>;
  tasks: Array<InputMaybe<Scalars['ID']['input']>>;
  workflow: Scalars['ID']['input'];
};

export type AddWorkflowFlowPayload = {
  __typename?: 'AddWorkflowFlowPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  workflow?: Maybe<Workflow>;
};

/** Aggregate function for pivot table */
export enum AggregateFunction {
  Avg = 'AVG',
  Count = 'COUNT',
  Max = 'MAX',
  Min = 'MIN',
  Sum = 'SUM',
  Value = 'VALUE'
}

/** A cell represents one value in the analytics output. */
export type AnalyticsCell = {
  __typename?: 'AnalyticsCell';
  alias?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type AnalyticsField = Node & {
  __typename?: 'AnalyticsField';
  alias: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  dataSource: Scalars['String']['output'];
  filters?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  function?: Maybe<AggregateFunction>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  meta?: Maybe<Scalars['GenericScalar']['output']>;
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  showOutput: Scalars['Boolean']['output'];
  sort: Scalars['Int']['output'];
  table: AnalyticsTable;
};

export type AnalyticsFieldConnection = {
  __typename?: 'AnalyticsFieldConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AnalyticsFieldEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `AnalyticsField` and its cursor. */
export type AnalyticsFieldEdge = {
  __typename?: 'AnalyticsFieldEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<AnalyticsField>;
};

export type AnalyticsFieldFilterSetType = {
  alias?: InputMaybe<Scalars['String']['input']>;
  createdAfter?: InputMaybe<Scalars['DateTime']['input']>;
  createdBefore?: InputMaybe<Scalars['DateTime']['input']>;
  createdByGroup?: InputMaybe<Scalars['String']['input']>;
  createdByUser?: InputMaybe<Scalars['String']['input']>;
  invert?: InputMaybe<Scalars['Boolean']['input']>;
  metaHasKey?: InputMaybe<Scalars['String']['input']>;
  metaValue?: InputMaybe<Array<InputMaybe<JsonValueFilterType>>>;
  modifiedAfter?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedBefore?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedByGroup?: InputMaybe<Scalars['String']['input']>;
  modifiedByUser?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slugs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  table?: InputMaybe<Scalars['ID']['input']>;
};

export type AnalyticsFieldOrderSetType = {
  attribute?: InputMaybe<SortableAnalyticsFieldAttributes>;
  direction?: InputMaybe<AscDesc>;
  meta?: InputMaybe<Scalars['String']['input']>;
};

export type AnalyticsOutput = {
  __typename?: 'AnalyticsOutput';
  records?: Maybe<AnalyticsTableContentConnection>;
  summary?: Maybe<AnalyticsRowConnection>;
};


export type AnalyticsOutputRecordsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type AnalyticsRowConnection = {
  __typename?: 'AnalyticsRowConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AnalyticsRowEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `AnalyticsRow` and its cursor. */
export type AnalyticsRowEdge = {
  __typename?: 'AnalyticsRowEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<AnalyticsCell>;
};

export type AnalyticsTable = Node & {
  __typename?: 'AnalyticsTable';
  availableFields?: Maybe<AvailableFieldConnection>;
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  disableVisibilities: Scalars['Boolean']['output'];
  fields: AnalyticsFieldConnection;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  meta: Scalars['JSONString']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  resultData?: Maybe<AnalyticsOutput>;
  slug: Scalars['String']['output'];
  startingObject?: Maybe<StartingObject>;
};


export type AnalyticsTableAvailableFieldsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  depth?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
};


export type AnalyticsTableFieldsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type AnalyticsTableConnection = {
  __typename?: 'AnalyticsTableConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AnalyticsTableEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type AnalyticsTableContentConnection = {
  __typename?: 'AnalyticsTableContentConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AnalyticsTableContentEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `AnalyticsTableContent` and its cursor. */
export type AnalyticsTableContentEdge = {
  __typename?: 'AnalyticsTableContentEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<AnalyticsRowConnection>;
};

/** A Relay edge containing a `AnalyticsTable` and its cursor. */
export type AnalyticsTableEdge = {
  __typename?: 'AnalyticsTableEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<AnalyticsTable>;
};

export type AnalyticsTableFilterSetType = {
  createdAfter?: InputMaybe<Scalars['DateTime']['input']>;
  createdBefore?: InputMaybe<Scalars['DateTime']['input']>;
  createdByGroup?: InputMaybe<Scalars['String']['input']>;
  createdByUser?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  invert?: InputMaybe<Scalars['Boolean']['input']>;
  metaHasKey?: InputMaybe<Scalars['String']['input']>;
  metaValue?: InputMaybe<Array<InputMaybe<JsonValueFilterType>>>;
  modifiedAfter?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedBefore?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedByGroup?: InputMaybe<Scalars['String']['input']>;
  modifiedByUser?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slugs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AnalyticsTableOrderSetType = {
  attribute?: InputMaybe<SortableAnalyticsTableAttributes>;
  direction?: InputMaybe<AscDesc>;
  meta?: InputMaybe<Scalars['String']['input']>;
};

export type Answer = {
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  meta: Scalars['GenericScalar']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  question: Question;
};

export type AnswerConnection = {
  __typename?: 'AnswerConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AnswerEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `Answer` and its cursor. */
export type AnswerEdge = {
  __typename?: 'AnswerEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Answer>;
};

export type AnswerFilterSetType = {
  createdAfter?: InputMaybe<Scalars['DateTime']['input']>;
  createdBefore?: InputMaybe<Scalars['DateTime']['input']>;
  createdByGroup?: InputMaybe<Scalars['String']['input']>;
  createdByUser?: InputMaybe<Scalars['String']['input']>;
  invert?: InputMaybe<Scalars['Boolean']['input']>;
  metaHasKey?: InputMaybe<Scalars['String']['input']>;
  metaValue?: InputMaybe<Array<InputMaybe<JsonValueFilterType>>>;
  modifiedAfter?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedBefore?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedByGroup?: InputMaybe<Scalars['String']['input']>;
  modifiedByUser?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Scalars['ID']['input']>;
  questions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  visibleInContext?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum AnswerHierarchyMode {
  Direct = 'DIRECT',
  Family = 'FAMILY'
}

export enum AnswerLookupMode {
  Contains = 'CONTAINS',
  Exact = 'EXACT',
  Gt = 'GT',
  Gte = 'GTE',
  Icontains = 'ICONTAINS',
  In = 'IN',
  Intersects = 'INTERSECTS',
  Isnull = 'ISNULL',
  Lt = 'LT',
  Lte = 'LTE',
  Startswith = 'STARTSWITH'
}

export type AnswerOrderSetType = {
  attribute?: InputMaybe<SortableAnswerAttributes>;
  direction?: InputMaybe<AscDesc>;
  meta?: InputMaybe<Scalars['String']['input']>;
};

export enum AscDesc {
  Asc = 'ASC',
  Desc = 'DESC'
}

/**
 * Available fields show users what can be selected in an analysis.
 *
 * The main identifier is the source path, but for display purposes,
 * a label (field at current position) and a full_label (including
 * parent fields' labels) is available.
 *
 * Frontends should query sub-fields (via prefix/depth) if is_leaf is
 * False. Some fields can be non-leafs as well as values, such as
 * dates: Dates can be extracted "as is", or we can extract a
 * date part (such as year, quarter, ...) from it.
 */
export type AvailableField = Node & {
  __typename?: 'AvailableField';
  fullLabel?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isLeaf?: Maybe<Scalars['Boolean']['output']>;
  isValue?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  sourcePath?: Maybe<Scalars['String']['output']>;
  supportedFunctions?: Maybe<Array<Maybe<AggregateFunction>>>;
};

export type AvailableFieldConnection = {
  __typename?: 'AvailableFieldConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AvailableFieldEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `AvailableField` and its cursor. */
export type AvailableFieldEdge = {
  __typename?: 'AvailableFieldEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<AvailableField>;
};

/** An enumeration. */
export enum ButtonAction {
  Complete = 'COMPLETE',
  Skip = 'SKIP'
}

/** An enumeration. */
export enum ButtonColor {
  Default = 'DEFAULT',
  Primary = 'PRIMARY',
  Secondary = 'SECONDARY'
}

export type CalculatedFloatQuestion = Node & Question & {
  __typename?: 'CalculatedFloatQuestion';
  calcExpression?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  forms?: Maybe<FormConnection>;
  hintText?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  infoText?: Maybe<Scalars['String']['output']>;
  isArchived: Scalars['Boolean']['output'];
  isHidden: Scalars['QuestionJexl']['output'];
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl']['output'];
  label: Scalars['String']['output'];
  meta: Scalars['GenericScalar']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  source?: Maybe<Question>;
};


export type CalculatedFloatQuestionFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<FormFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormOrderSetType>>>;
};

export type CancelCaseInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Provide extra context for dynamic jexl transforms and events */
  context?: InputMaybe<Scalars['JSONString']['input']>;
  id: Scalars['ID']['input'];
};

export type CancelCasePayload = {
  __typename?: 'CancelCasePayload';
  case?: Maybe<Case>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CancelWorkItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Provide extra context for dynamic jexl transforms and events */
  context?: InputMaybe<Scalars['JSONString']['input']>;
  id: Scalars['ID']['input'];
};

export type CancelWorkItemPayload = {
  __typename?: 'CancelWorkItemPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  workItem?: Maybe<WorkItem>;
};

export type Case = Node & {
  __typename?: 'Case';
  /** Time when case has either been canceled or completed */
  closedAt?: Maybe<Scalars['DateTime']['output']>;
  closedByGroup?: Maybe<Scalars['String']['output']>;
  closedByUser?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  document?: Maybe<Document>;
  /** Family id which case belongs to. */
  family?: Maybe<Case>;
  familyWorkItems?: Maybe<WorkItemConnection>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  meta?: Maybe<Scalars['GenericScalar']['output']>;
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  parentWorkItem?: Maybe<WorkItem>;
  status: CaseStatus;
  workItems?: Maybe<WorkItemConnection>;
  workflow: Workflow;
};


export type CaseFamilyWorkItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<WorkItemFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<WorkItemOrderSetType>>>;
};


export type CaseWorkItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<WorkItemFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<WorkItemOrderSetType>>>;
};

export type CaseConnection = {
  __typename?: 'CaseConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CaseEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `Case` and its cursor. */
export type CaseEdge = {
  __typename?: 'CaseEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Case>;
};

export type CaseFilterSetType = {
  createdAfter?: InputMaybe<Scalars['DateTime']['input']>;
  createdBefore?: InputMaybe<Scalars['DateTime']['input']>;
  createdByGroup?: InputMaybe<Scalars['String']['input']>;
  createdByUser?: InputMaybe<Scalars['String']['input']>;
  documentForm?: InputMaybe<Scalars['String']['input']>;
  documentForms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  excludeChildCases?: InputMaybe<Scalars['Boolean']['input']>;
  hasAnswer?: InputMaybe<Array<InputMaybe<HasAnswerFilterType>>>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  invert?: InputMaybe<Scalars['Boolean']['input']>;
  metaHasKey?: InputMaybe<Scalars['String']['input']>;
  metaValue?: InputMaybe<Array<InputMaybe<JsonValueFilterType>>>;
  modifiedAfter?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedBefore?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedByGroup?: InputMaybe<Scalars['String']['input']>;
  modifiedByUser?: InputMaybe<Scalars['String']['input']>;
  rootCase?: InputMaybe<Scalars['ID']['input']>;
  searchAnswers?: InputMaybe<Array<InputMaybe<SearchAnswersFilterType>>>;
  status?: InputMaybe<Array<InputMaybe<CaseStatusArgument>>>;
  workItemDocumentHasAnswer?: InputMaybe<Array<InputMaybe<HasAnswerFilterType>>>;
  workflow?: InputMaybe<Scalars['ID']['input']>;
};

export type CaseOrderSetType = {
  attribute?: InputMaybe<SortableCaseAttributes>;
  direction?: InputMaybe<AscDesc>;
  documentAnswer?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['String']['input']>;
};

/** An enumeration. */
export enum CaseStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Running = 'RUNNING',
  Suspended = 'SUSPENDED'
}

/** An enumeration. */
export enum CaseStatusArgument {
  /** Case is canceled. */
  Canceled = 'CANCELED',
  /** Case is done. */
  Completed = 'COMPLETED',
  /** Case is running and work items need to be completed. */
  Running = 'RUNNING',
  /** Case is suspended. */
  Suspended = 'SUSPENDED'
}

export type ChoiceQuestion = Node & Question & {
  __typename?: 'ChoiceQuestion';
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  defaultAnswer?: Maybe<StringAnswer>;
  formatValidators?: Maybe<FormatValidatorConnection>;
  forms?: Maybe<FormConnection>;
  hintText?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  infoText?: Maybe<Scalars['String']['output']>;
  isArchived: Scalars['Boolean']['output'];
  isHidden: Scalars['QuestionJexl']['output'];
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl']['output'];
  label: Scalars['String']['output'];
  meta: Scalars['GenericScalar']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  options?: Maybe<OptionConnection>;
  slug: Scalars['String']['output'];
  source?: Maybe<Question>;
};


export type ChoiceQuestionFormatValidatorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ChoiceQuestionFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<FormFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormOrderSetType>>>;
};


export type ChoiceQuestionOptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<OptionFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<OptionOrderSetType>>>;
};

export type CompleteTaskFormTask = Node & Task & {
  __typename?: 'CompleteTaskFormTask';
  addressGroups?: Maybe<Scalars['GroupJexl']['output']>;
  continueAsync?: Maybe<Scalars['Boolean']['output']>;
  controlGroups?: Maybe<Scalars['GroupJexl']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  form: Form;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isArchived: Scalars['Boolean']['output'];
  isMultipleInstance: Scalars['Boolean']['output'];
  /** Time in seconds task may take to be processed. */
  leadTime?: Maybe<Scalars['Int']['output']>;
  meta: Scalars['GenericScalar']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type CompleteWorkItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Provide extra context for dynamic jexl transforms and events */
  context?: InputMaybe<Scalars['JSONString']['input']>;
  id: Scalars['ID']['input'];
};

export type CompleteWorkItemPayload = {
  __typename?: 'CompleteWorkItemPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  workItem?: Maybe<WorkItem>;
};

export type CompleteWorkflowFormTask = Node & Task & {
  __typename?: 'CompleteWorkflowFormTask';
  addressGroups?: Maybe<Scalars['GroupJexl']['output']>;
  continueAsync?: Maybe<Scalars['Boolean']['output']>;
  controlGroups?: Maybe<Scalars['GroupJexl']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isArchived: Scalars['Boolean']['output'];
  isMultipleInstance: Scalars['Boolean']['output'];
  /** Time in seconds task may take to be processed. */
  leadTime?: Maybe<Scalars['Int']['output']>;
  meta: Scalars['GenericScalar']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type CopyDocumentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  source: Scalars['ID']['input'];
};

export type CopyDocumentPayload = {
  __typename?: 'CopyDocumentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  document?: Maybe<Document>;
};

export type CopyFormInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  source: Scalars['ID']['input'];
};

export type CopyFormPayload = {
  __typename?: 'CopyFormPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  form?: Maybe<Form>;
};

export type CopyOptionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  source: Scalars['ID']['input'];
};

export type CopyOptionPayload = {
  __typename?: 'CopyOptionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  option?: Maybe<Option>;
};

export type CopyQuestionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  source: Scalars['ID']['input'];
};

export type CopyQuestionPayload = {
  __typename?: 'CopyQuestionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  question?: Maybe<Question>;
};

export type CreateWorkItemInput = {
  addressedGroups?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Users responsible to undertake given work item. */
  assignedUsers?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  case: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Provide extra context for dynamic jexl transforms and events */
  context?: InputMaybe<Scalars['JSONString']['input']>;
  controllingGroups?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  deadline?: InputMaybe<Scalars['DateTime']['input']>;
  /** Will be set from Task, if not provided. */
  description?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  multipleInstanceTask: Scalars['ID']['input'];
  /** Will be set from Task, if not provided. */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateWorkItemPayload = {
  __typename?: 'CreateWorkItemPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  workItem?: Maybe<WorkItem>;
};

export type DataSource = {
  __typename?: 'DataSource';
  info?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type DataSourceConnection = {
  __typename?: 'DataSourceConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DataSourceEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type DataSourceData = {
  __typename?: 'DataSourceData';
  label: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type DataSourceDataConnection = {
  __typename?: 'DataSourceDataConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DataSourceDataEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `DataSourceData` and its cursor. */
export type DataSourceDataEdge = {
  __typename?: 'DataSourceDataEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<DataSourceData>;
};

/** A Relay edge containing a `DataSource` and its cursor. */
export type DataSourceEdge = {
  __typename?: 'DataSourceEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<DataSource>;
};

export type DateAnswer = Answer & Node & {
  __typename?: 'DateAnswer';
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  meta: Scalars['GenericScalar']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  question: Question;
  value?: Maybe<Scalars['Date']['output']>;
};

export type DateQuestion = Node & Question & {
  __typename?: 'DateQuestion';
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  defaultAnswer?: Maybe<DateAnswer>;
  formatValidators?: Maybe<FormatValidatorConnection>;
  forms?: Maybe<FormConnection>;
  hintText?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  infoText?: Maybe<Scalars['String']['output']>;
  isArchived: Scalars['Boolean']['output'];
  isHidden: Scalars['QuestionJexl']['output'];
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl']['output'];
  label: Scalars['String']['output'];
  meta: Scalars['GenericScalar']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  source?: Maybe<Question>;
};


export type DateQuestionFormatValidatorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type DateQuestionFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<FormFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormOrderSetType>>>;
};

/** Debugging information for the current query. */
export type DjangoDebug = {
  __typename?: 'DjangoDebug';
  /** Raise exceptions for this API query. */
  exceptions?: Maybe<Array<Maybe<DjangoDebugException>>>;
  /** Executed SQL queries for this API query. */
  sql?: Maybe<Array<Maybe<DjangoDebugSql>>>;
};

/** Represents a single exception raised. */
export type DjangoDebugException = {
  __typename?: 'DjangoDebugException';
  /** The class of the exception */
  excType: Scalars['String']['output'];
  /** The message of the exception */
  message: Scalars['String']['output'];
  /** The stack trace */
  stack: Scalars['String']['output'];
};

/** Represents a single database query made to a Django managed DB. */
export type DjangoDebugSql = {
  __typename?: 'DjangoDebugSQL';
  /** The Django database alias (e.g. 'default'). */
  alias: Scalars['String']['output'];
  /** Duration of this database query in seconds. */
  duration: Scalars['Float']['output'];
  /** Postgres connection encoding if available. */
  encoding?: Maybe<Scalars['String']['output']>;
  /** Whether this database query was a SELECT. */
  isSelect: Scalars['Boolean']['output'];
  /** Whether this database query took more than 10 seconds. */
  isSlow: Scalars['Boolean']['output'];
  /** Postgres isolation level if available. */
  isoLevel?: Maybe<Scalars['String']['output']>;
  /** JSON encoded database query parameters. */
  params: Scalars['String']['output'];
  /** The raw SQL of this query, without params. */
  rawSql: Scalars['String']['output'];
  /** The actual SQL sent to this database. */
  sql?: Maybe<Scalars['String']['output']>;
  /** Start time of this database query. */
  startTime: Scalars['Float']['output'];
  /** Stop time of this database query. */
  stopTime: Scalars['Float']['output'];
  /** Postgres transaction ID if available. */
  transId?: Maybe<Scalars['String']['output']>;
  /** Postgres transaction status if available. */
  transStatus?: Maybe<Scalars['String']['output']>;
  /** The type of database being used (e.g. postrgesql, mysql, sqlite). */
  vendor: Scalars['String']['output'];
};

export type Document = Node & {
  __typename?: 'Document';
  answers?: Maybe<AnswerConnection>;
  case?: Maybe<Case>;
  /** Reference this document has been copied from */
  copies: DocumentConnection;
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  form: Form;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  meta?: Maybe<Scalars['GenericScalar']['output']>;
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  modifiedContentAt?: Maybe<Scalars['DateTime']['output']>;
  modifiedContentByGroup?: Maybe<Scalars['String']['output']>;
  modifiedContentByUser?: Maybe<Scalars['String']['output']>;
  /** Reference this document has been copied from */
  source?: Maybe<Document>;
  workItem?: Maybe<WorkItem>;
};


export type DocumentAnswersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<AnswerFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<AnswerOrderSetType>>>;
};


export type DocumentCopiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type DocumentConnection = {
  __typename?: 'DocumentConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DocumentEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `Document` and its cursor. */
export type DocumentEdge = {
  __typename?: 'DocumentEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Document>;
};

export type DocumentFilterSetType = {
  createdAfter?: InputMaybe<Scalars['DateTime']['input']>;
  createdBefore?: InputMaybe<Scalars['DateTime']['input']>;
  createdByGroup?: InputMaybe<Scalars['String']['input']>;
  createdByUser?: InputMaybe<Scalars['String']['input']>;
  form?: InputMaybe<Scalars['ID']['input']>;
  forms?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  hasAnswer?: InputMaybe<Array<InputMaybe<HasAnswerFilterType>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  invert?: InputMaybe<Scalars['Boolean']['input']>;
  metaHasKey?: InputMaybe<Scalars['String']['input']>;
  metaValue?: InputMaybe<Array<InputMaybe<JsonValueFilterType>>>;
  modifiedAfter?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedBefore?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedByGroup?: InputMaybe<Scalars['String']['input']>;
  modifiedByUser?: InputMaybe<Scalars['String']['input']>;
  rootDocument?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  searchAnswers?: InputMaybe<Array<InputMaybe<SearchAnswersFilterType>>>;
};

export type DocumentOrderSetType = {
  answerValue?: InputMaybe<Scalars['String']['input']>;
  attribute?: InputMaybe<SortableDocumentAttributes>;
  direction?: InputMaybe<AscDesc>;
  meta?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentValidityConnection = {
  __typename?: 'DocumentValidityConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DocumentValidityEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `DocumentValidity` and its cursor. */
export type DocumentValidityEdge = {
  __typename?: 'DocumentValidityEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ValidationResult>;
};

export type DynamicChoiceQuestion = DynamicQuestion & Node & Question & {
  __typename?: 'DynamicChoiceQuestion';
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  dataSource: Scalars['String']['output'];
  formatValidators?: Maybe<FormatValidatorConnection>;
  forms?: Maybe<FormConnection>;
  hintText?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  infoText?: Maybe<Scalars['String']['output']>;
  isArchived: Scalars['Boolean']['output'];
  isHidden: Scalars['QuestionJexl']['output'];
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl']['output'];
  label: Scalars['String']['output'];
  meta: Scalars['GenericScalar']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  options?: Maybe<DataSourceDataConnection>;
  slug: Scalars['String']['output'];
  source?: Maybe<Question>;
};


export type DynamicChoiceQuestionFormatValidatorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type DynamicChoiceQuestionFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<FormFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormOrderSetType>>>;
};


export type DynamicChoiceQuestionOptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  context?: InputMaybe<Scalars['JSONString']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type DynamicMultipleChoiceQuestion = DynamicQuestion & Node & Question & {
  __typename?: 'DynamicMultipleChoiceQuestion';
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  dataSource: Scalars['String']['output'];
  formatValidators?: Maybe<FormatValidatorConnection>;
  forms?: Maybe<FormConnection>;
  hintText?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  infoText?: Maybe<Scalars['String']['output']>;
  isArchived: Scalars['Boolean']['output'];
  isHidden: Scalars['QuestionJexl']['output'];
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl']['output'];
  label: Scalars['String']['output'];
  meta: Scalars['GenericScalar']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  options?: Maybe<DataSourceDataConnection>;
  slug: Scalars['String']['output'];
  source?: Maybe<Question>;
};


export type DynamicMultipleChoiceQuestionFormatValidatorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type DynamicMultipleChoiceQuestionFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<FormFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormOrderSetType>>>;
};


export type DynamicMultipleChoiceQuestionOptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  context?: InputMaybe<Scalars['JSONString']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type DynamicOption = Node & {
  __typename?: 'DynamicOption';
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  document: Document;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  question: DynamicQuestion;
  slug: Scalars['String']['output'];
};

export type DynamicOptionConnection = {
  __typename?: 'DynamicOptionConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DynamicOptionEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `DynamicOption` and its cursor. */
export type DynamicOptionEdge = {
  __typename?: 'DynamicOptionEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<DynamicOption>;
};

export type DynamicOptionFilterSetType = {
  document?: InputMaybe<Scalars['ID']['input']>;
  invert?: InputMaybe<Scalars['Boolean']['input']>;
  question?: InputMaybe<Scalars['ID']['input']>;
};

export type DynamicOptionOrderSetType = {
  attribute?: InputMaybe<SortableDynamicOptionAttributes>;
  direction?: InputMaybe<AscDesc>;
  meta?: InputMaybe<Scalars['String']['input']>;
};

export type DynamicQuestion = {
  dataSource: Scalars['String']['output'];
  hintText?: Maybe<Scalars['String']['output']>;
  options?: Maybe<DataSourceDataConnection>;
};


export type DynamicQuestionOptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  context?: InputMaybe<Scalars['JSONString']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type File = Node & {
  __typename?: 'File';
  answer?: Maybe<FilesAnswer>;
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  downloadUrl?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['GenericScalar']['output']>;
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  uploadUrl?: Maybe<Scalars['String']['output']>;
};

export type FilesAnswer = Answer & Node & {
  __typename?: 'FilesAnswer';
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  meta: Scalars['GenericScalar']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  question: Question;
  value: Array<Maybe<File>>;
};

export type FilesQuestion = Node & Question & {
  __typename?: 'FilesQuestion';
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  formatValidators?: Maybe<FormatValidatorConnection>;
  forms?: Maybe<FormConnection>;
  hintText?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  infoText?: Maybe<Scalars['String']['output']>;
  isArchived: Scalars['Boolean']['output'];
  isHidden: Scalars['QuestionJexl']['output'];
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl']['output'];
  label: Scalars['String']['output'];
  meta: Scalars['GenericScalar']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  source?: Maybe<Question>;
};


export type FilesQuestionFormatValidatorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type FilesQuestionFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<FormFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormOrderSetType>>>;
};

export type FloatAnswer = Answer & Node & {
  __typename?: 'FloatAnswer';
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  meta: Scalars['GenericScalar']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  question: Question;
  value?: Maybe<Scalars['Float']['output']>;
};

export type FloatQuestion = Node & Question & {
  __typename?: 'FloatQuestion';
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  defaultAnswer?: Maybe<FloatAnswer>;
  formatValidators?: Maybe<FormatValidatorConnection>;
  forms?: Maybe<FormConnection>;
  hintText?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  infoText?: Maybe<Scalars['String']['output']>;
  isArchived: Scalars['Boolean']['output'];
  isHidden: Scalars['QuestionJexl']['output'];
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl']['output'];
  label: Scalars['String']['output'];
  maxValue?: Maybe<Scalars['Float']['output']>;
  meta: Scalars['GenericScalar']['output'];
  minValue?: Maybe<Scalars['Float']['output']>;
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  placeholder?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  source?: Maybe<Question>;
  step?: Maybe<Scalars['Float']['output']>;
};


export type FloatQuestionFormatValidatorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type FloatQuestionFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<FormFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormOrderSetType>>>;
};

export type Flow = Node & {
  __typename?: 'Flow';
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  next: Scalars['FlowJexl']['output'];
  tasks: Array<Maybe<Task>>;
};

export type FlowConnection = {
  __typename?: 'FlowConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FlowEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `Flow` and its cursor. */
export type FlowEdge = {
  __typename?: 'FlowEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Flow>;
};

export type FlowFilterSetType = {
  createdAfter?: InputMaybe<Scalars['DateTime']['input']>;
  createdBefore?: InputMaybe<Scalars['DateTime']['input']>;
  createdByGroup?: InputMaybe<Scalars['String']['input']>;
  createdByUser?: InputMaybe<Scalars['String']['input']>;
  invert?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedAfter?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedBefore?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedByGroup?: InputMaybe<Scalars['String']['input']>;
  modifiedByUser?: InputMaybe<Scalars['String']['input']>;
  task?: InputMaybe<Scalars['ID']['input']>;
};

export type FlowOrderSetType = {
  attribute?: InputMaybe<SortableFlowAttributes>;
  direction?: InputMaybe<AscDesc>;
  meta?: InputMaybe<Scalars['String']['input']>;
};

export type Form = Node & {
  __typename?: 'Form';
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documents: DocumentConnection;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isArchived: Scalars['Boolean']['output'];
  isPublished: Scalars['Boolean']['output'];
  meta?: Maybe<Scalars['GenericScalar']['output']>;
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  questions?: Maybe<QuestionConnection>;
  slug: Scalars['String']['output'];
  /** Reference this form has been copied from */
  source?: Maybe<Form>;
};


export type FormDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type FormQuestionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<QuestionFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<QuestionOrderSetType>>>;
};

export type FormConnection = {
  __typename?: 'FormConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FormEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `Form` and its cursor. */
export type FormEdge = {
  __typename?: 'FormEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Form>;
};

export type FormFilterSetType = {
  createdAfter?: InputMaybe<Scalars['DateTime']['input']>;
  createdBefore?: InputMaybe<Scalars['DateTime']['input']>;
  createdByGroup?: InputMaybe<Scalars['String']['input']>;
  createdByUser?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  invert?: InputMaybe<Scalars['Boolean']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  metaHasKey?: InputMaybe<Scalars['String']['input']>;
  metaValue?: InputMaybe<Array<InputMaybe<JsonValueFilterType>>>;
  modifiedAfter?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedBefore?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedByGroup?: InputMaybe<Scalars['String']['input']>;
  modifiedByUser?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  slugs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FormOrderSetType = {
  attribute?: InputMaybe<SortableFormAttributes>;
  direction?: InputMaybe<AscDesc>;
  meta?: InputMaybe<Scalars['String']['input']>;
};

export type FormQuestion = Node & Question & {
  __typename?: 'FormQuestion';
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  forms?: Maybe<FormConnection>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  infoText?: Maybe<Scalars['String']['output']>;
  isArchived: Scalars['Boolean']['output'];
  isHidden: Scalars['QuestionJexl']['output'];
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl']['output'];
  label: Scalars['String']['output'];
  meta: Scalars['GenericScalar']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  source?: Maybe<Question>;
  /** Form referenced in a FormQuestion */
  subForm?: Maybe<Form>;
};


export type FormQuestionFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<FormFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormOrderSetType>>>;
};

export type FormatValidator = {
  __typename?: 'FormatValidator';
  allowedQuestionTypes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name: Scalars['String']['output'];
  regex?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
};

export type FormatValidatorConnection = {
  __typename?: 'FormatValidatorConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FormatValidatorEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `FormatValidator` and its cursor. */
export type FormatValidatorEdge = {
  __typename?: 'FormatValidatorEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<FormatValidator>;
};

/**
 * Lookup type to search document structures.
 *
 * When using lookup `ISNULL`, the provided `value` will be ignored.
 */
export type HasAnswerFilterType = {
  hierarchy?: InputMaybe<AnswerHierarchyMode>;
  lookup?: InputMaybe<AnswerLookupMode>;
  question: Scalars['ID']['input'];
  value?: InputMaybe<Scalars['GenericScalar']['input']>;
};

export type IntegerAnswer = Answer & Node & {
  __typename?: 'IntegerAnswer';
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  meta: Scalars['GenericScalar']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  question: Question;
  value?: Maybe<Scalars['Int']['output']>;
};

export type IntegerQuestion = Node & Question & {
  __typename?: 'IntegerQuestion';
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  defaultAnswer?: Maybe<IntegerAnswer>;
  formatValidators?: Maybe<FormatValidatorConnection>;
  forms?: Maybe<FormConnection>;
  hintText?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  infoText?: Maybe<Scalars['String']['output']>;
  isArchived: Scalars['Boolean']['output'];
  isHidden: Scalars['QuestionJexl']['output'];
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl']['output'];
  label: Scalars['String']['output'];
  maxValue?: Maybe<Scalars['Int']['output']>;
  meta: Scalars['GenericScalar']['output'];
  minValue?: Maybe<Scalars['Int']['output']>;
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  placeholder?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  source?: Maybe<Question>;
};


export type IntegerQuestionFormatValidatorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type IntegerQuestionFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<FormFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormOrderSetType>>>;
};

export enum JsonLookupMode {
  Contains = 'CONTAINS',
  Exact = 'EXACT',
  Gt = 'GT',
  Gte = 'GTE',
  Icontains = 'ICONTAINS',
  In = 'IN',
  Intersects = 'INTERSECTS',
  Lt = 'LT',
  Lte = 'LTE',
  Startswith = 'STARTSWITH'
}

export type JsonValueFilterType = {
  key: Scalars['String']['input'];
  lookup?: InputMaybe<JsonLookupMode>;
  value: Scalars['GenericScalar']['input'];
};

export type ListAnswer = Answer & Node & {
  __typename?: 'ListAnswer';
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  meta: Scalars['GenericScalar']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  question: Question;
  selectedOptions?: Maybe<SelectedOptionConnection>;
  value?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ListAnswerSelectedOptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type MultipleChoiceQuestion = Node & Question & {
  __typename?: 'MultipleChoiceQuestion';
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  defaultAnswer?: Maybe<ListAnswer>;
  formatValidators?: Maybe<FormatValidatorConnection>;
  forms?: Maybe<FormConnection>;
  hintText?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  infoText?: Maybe<Scalars['String']['output']>;
  isArchived: Scalars['Boolean']['output'];
  isHidden: Scalars['QuestionJexl']['output'];
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl']['output'];
  label: Scalars['String']['output'];
  meta: Scalars['GenericScalar']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  options?: Maybe<OptionConnection>;
  slug: Scalars['String']['output'];
  source?: Maybe<Question>;
  staticContent?: Maybe<Scalars['String']['output']>;
};


export type MultipleChoiceQuestionFormatValidatorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type MultipleChoiceQuestionFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<FormFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormOrderSetType>>>;
};


export type MultipleChoiceQuestionOptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<OptionFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<OptionOrderSetType>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add question at the end of form. */
  addFormQuestion?: Maybe<AddFormQuestionPayload>;
  addWorkflowFlow?: Maybe<AddWorkflowFlowPayload>;
  cancelCase?: Maybe<CancelCasePayload>;
  cancelWorkItem?: Maybe<CancelWorkItemPayload>;
  completeWorkItem?: Maybe<CompleteWorkItemPayload>;
  copyDocument?: Maybe<CopyDocumentPayload>;
  copyForm?: Maybe<CopyFormPayload>;
  copyOption?: Maybe<CopyOptionPayload>;
  copyQuestion?: Maybe<CopyQuestionPayload>;
  createWorkItem?: Maybe<CreateWorkItemPayload>;
  redoWorkItem?: Maybe<RedoWorkItemPayload>;
  removeAnalyticsField?: Maybe<RemoveAnalyticsFieldPayload>;
  removeAnalyticsTable?: Maybe<RemoveAnalyticsTablePayload>;
  removeAnswer?: Maybe<RemoveAnswerPayload>;
  removeDefaultAnswer?: Maybe<RemoveDefaultAnswerPayload>;
  removeDocument?: Maybe<RemoveDocumentPayload>;
  removeFlow?: Maybe<RemoveFlowPayload>;
  removeFormQuestion?: Maybe<RemoveFormQuestionPayload>;
  reopenCase?: Maybe<ReopenCasePayload>;
  reorderAnalyticsFields?: Maybe<ReorderAnalyticsFieldsPayload>;
  reorderFormQuestions?: Maybe<ReorderFormQuestionsPayload>;
  resumeCase?: Maybe<ResumeCasePayload>;
  resumeWorkItem?: Maybe<ResumeWorkItemPayload>;
  saveActionButtonQuestion?: Maybe<SaveActionButtonQuestionPayload>;
  saveAnalyticsField?: Maybe<SaveAnalyticsFieldPayload>;
  saveAnalyticsTable?: Maybe<SaveAnalyticsTablePayload>;
  saveCalculatedFloatQuestion?: Maybe<SaveCalculatedFloatQuestionPayload>;
  saveCase?: Maybe<SaveCasePayload>;
  saveChoiceQuestion?: Maybe<SaveChoiceQuestionPayload>;
  saveCompleteTaskFormTask?: Maybe<SaveCompleteTaskFormTaskPayload>;
  saveCompleteWorkflowFormTask?: Maybe<SaveCompleteWorkflowFormTaskPayload>;
  saveDateQuestion?: Maybe<SaveDateQuestionPayload>;
  saveDefaultDateAnswer?: Maybe<SaveDefaultDateAnswerPayload>;
  saveDefaultFloatAnswer?: Maybe<SaveDefaultFloatAnswerPayload>;
  saveDefaultIntegerAnswer?: Maybe<SaveDefaultIntegerAnswerPayload>;
  saveDefaultListAnswer?: Maybe<SaveDefaultListAnswerPayload>;
  saveDefaultStringAnswer?: Maybe<SaveDefaultStringAnswerPayload>;
  saveDefaultTableAnswer?: Maybe<SaveDefaultTableAnswerPayload>;
  saveDocument?: Maybe<SaveDocumentPayload>;
  saveDocumentDateAnswer?: Maybe<SaveDocumentDateAnswerPayload>;
  saveDocumentFilesAnswer?: Maybe<SaveDocumentFilesAnswerPayload>;
  saveDocumentFloatAnswer?: Maybe<SaveDocumentFloatAnswerPayload>;
  saveDocumentIntegerAnswer?: Maybe<SaveDocumentIntegerAnswerPayload>;
  saveDocumentListAnswer?: Maybe<SaveDocumentListAnswerPayload>;
  saveDocumentStringAnswer?: Maybe<SaveDocumentStringAnswerPayload>;
  saveDocumentTableAnswer?: Maybe<SaveDocumentTableAnswerPayload>;
  saveDynamicChoiceQuestion?: Maybe<SaveDynamicChoiceQuestionPayload>;
  saveDynamicMultipleChoiceQuestion?: Maybe<SaveDynamicMultipleChoiceQuestionPayload>;
  saveFilesQuestion?: Maybe<SaveFilesQuestionPayload>;
  saveFloatQuestion?: Maybe<SaveFloatQuestionPayload>;
  saveForm?: Maybe<SaveFormPayload>;
  saveFormQuestion?: Maybe<SaveFormQuestionPayload>;
  saveIntegerQuestion?: Maybe<SaveIntegerQuestionPayload>;
  saveMultipleChoiceQuestion?: Maybe<SaveMultipleChoiceQuestionPayload>;
  saveOption?: Maybe<SaveOptionPayload>;
  saveSimpleTask?: Maybe<SaveSimpleTaskPayload>;
  saveStaticQuestion?: Maybe<SaveStaticQuestionPayload>;
  saveTableQuestion?: Maybe<SaveTableQuestionPayload>;
  saveTextQuestion?: Maybe<SaveTextQuestionPayload>;
  saveTextareaQuestion?: Maybe<SaveTextareaQuestionPayload>;
  saveWorkItem?: Maybe<SaveWorkItemPayload>;
  saveWorkflow?: Maybe<SaveWorkflowPayload>;
  skipWorkItem?: Maybe<SkipWorkItemPayload>;
  suspendCase?: Maybe<SuspendCasePayload>;
  suspendWorkItem?: Maybe<SuspendWorkItemPayload>;
};


export type MutationAddFormQuestionArgs = {
  input: AddFormQuestionInput;
};


export type MutationAddWorkflowFlowArgs = {
  input: AddWorkflowFlowInput;
};


export type MutationCancelCaseArgs = {
  input: CancelCaseInput;
};


export type MutationCancelWorkItemArgs = {
  input: CancelWorkItemInput;
};


export type MutationCompleteWorkItemArgs = {
  input: CompleteWorkItemInput;
};


export type MutationCopyDocumentArgs = {
  input: CopyDocumentInput;
};


export type MutationCopyFormArgs = {
  input: CopyFormInput;
};


export type MutationCopyOptionArgs = {
  input: CopyOptionInput;
};


export type MutationCopyQuestionArgs = {
  input: CopyQuestionInput;
};


export type MutationCreateWorkItemArgs = {
  input: CreateWorkItemInput;
};


export type MutationRedoWorkItemArgs = {
  input: RedoWorkItemInput;
};


export type MutationRemoveAnalyticsFieldArgs = {
  input: RemoveAnalyticsFieldInput;
};


export type MutationRemoveAnalyticsTableArgs = {
  input: RemoveAnalyticsTableInput;
};


export type MutationRemoveAnswerArgs = {
  input: RemoveAnswerInput;
};


export type MutationRemoveDefaultAnswerArgs = {
  input: RemoveDefaultAnswerInput;
};


export type MutationRemoveDocumentArgs = {
  input: RemoveDocumentInput;
};


export type MutationRemoveFlowArgs = {
  input: RemoveFlowInput;
};


export type MutationRemoveFormQuestionArgs = {
  input: RemoveFormQuestionInput;
};


export type MutationReopenCaseArgs = {
  input: ReopenCaseInput;
};


export type MutationReorderAnalyticsFieldsArgs = {
  input: ReorderAnalyticsFieldsInput;
};


export type MutationReorderFormQuestionsArgs = {
  input: ReorderFormQuestionsInput;
};


export type MutationResumeCaseArgs = {
  input: ResumeCaseInput;
};


export type MutationResumeWorkItemArgs = {
  input: ResumeWorkItemInput;
};


export type MutationSaveActionButtonQuestionArgs = {
  input: SaveActionButtonQuestionInput;
};


export type MutationSaveAnalyticsFieldArgs = {
  input: SaveAnalyticsFieldInput;
};


export type MutationSaveAnalyticsTableArgs = {
  input: SaveAnalyticsTableInput;
};


export type MutationSaveCalculatedFloatQuestionArgs = {
  input: SaveCalculatedFloatQuestionInput;
};


export type MutationSaveCaseArgs = {
  input: SaveCaseInput;
};


export type MutationSaveChoiceQuestionArgs = {
  input: SaveChoiceQuestionInput;
};


export type MutationSaveCompleteTaskFormTaskArgs = {
  input: SaveCompleteTaskFormTaskInput;
};


export type MutationSaveCompleteWorkflowFormTaskArgs = {
  input: SaveCompleteWorkflowFormTaskInput;
};


export type MutationSaveDateQuestionArgs = {
  input: SaveDateQuestionInput;
};


export type MutationSaveDefaultDateAnswerArgs = {
  input: SaveDefaultDateAnswerInput;
};


export type MutationSaveDefaultFloatAnswerArgs = {
  input: SaveDefaultFloatAnswerInput;
};


export type MutationSaveDefaultIntegerAnswerArgs = {
  input: SaveDefaultIntegerAnswerInput;
};


export type MutationSaveDefaultListAnswerArgs = {
  input: SaveDefaultListAnswerInput;
};


export type MutationSaveDefaultStringAnswerArgs = {
  input: SaveDefaultStringAnswerInput;
};


export type MutationSaveDefaultTableAnswerArgs = {
  input: SaveDefaultTableAnswerInput;
};


export type MutationSaveDocumentArgs = {
  input: SaveDocumentInput;
};


export type MutationSaveDocumentDateAnswerArgs = {
  input: SaveDocumentDateAnswerInput;
};


export type MutationSaveDocumentFilesAnswerArgs = {
  input: SaveDocumentFilesAnswerInput;
};


export type MutationSaveDocumentFloatAnswerArgs = {
  input: SaveDocumentFloatAnswerInput;
};


export type MutationSaveDocumentIntegerAnswerArgs = {
  input: SaveDocumentIntegerAnswerInput;
};


export type MutationSaveDocumentListAnswerArgs = {
  input: SaveDocumentListAnswerInput;
};


export type MutationSaveDocumentStringAnswerArgs = {
  input: SaveDocumentStringAnswerInput;
};


export type MutationSaveDocumentTableAnswerArgs = {
  input: SaveDocumentTableAnswerInput;
};


export type MutationSaveDynamicChoiceQuestionArgs = {
  input: SaveDynamicChoiceQuestionInput;
};


export type MutationSaveDynamicMultipleChoiceQuestionArgs = {
  input: SaveDynamicMultipleChoiceQuestionInput;
};


export type MutationSaveFilesQuestionArgs = {
  input: SaveFilesQuestionInput;
};


export type MutationSaveFloatQuestionArgs = {
  input: SaveFloatQuestionInput;
};


export type MutationSaveFormArgs = {
  input: SaveFormInput;
};


export type MutationSaveFormQuestionArgs = {
  input: SaveFormQuestionInput;
};


export type MutationSaveIntegerQuestionArgs = {
  input: SaveIntegerQuestionInput;
};


export type MutationSaveMultipleChoiceQuestionArgs = {
  input: SaveMultipleChoiceQuestionInput;
};


export type MutationSaveOptionArgs = {
  input: SaveOptionInput;
};


export type MutationSaveSimpleTaskArgs = {
  input: SaveSimpleTaskInput;
};


export type MutationSaveStaticQuestionArgs = {
  input: SaveStaticQuestionInput;
};


export type MutationSaveTableQuestionArgs = {
  input: SaveTableQuestionInput;
};


export type MutationSaveTextQuestionArgs = {
  input: SaveTextQuestionInput;
};


export type MutationSaveTextareaQuestionArgs = {
  input: SaveTextareaQuestionInput;
};


export type MutationSaveWorkItemArgs = {
  input: SaveWorkItemInput;
};


export type MutationSaveWorkflowArgs = {
  input: SaveWorkflowInput;
};


export type MutationSkipWorkItemArgs = {
  input: SkipWorkItemInput;
};


export type MutationSuspendCaseArgs = {
  input: SuspendCaseInput;
};


export type MutationSuspendWorkItemArgs = {
  input: SuspendWorkItemInput;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object */
  id: Scalars['ID']['output'];
};

export type Option = Node & {
  __typename?: 'Option';
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isArchived: Scalars['Boolean']['output'];
  isHidden: Scalars['QuestionJexl']['output'];
  label: Scalars['String']['output'];
  meta?: Maybe<Scalars['GenericScalar']['output']>;
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  /** Reference this option has been copied from */
  source?: Maybe<Option>;
};

export type OptionConnection = {
  __typename?: 'OptionConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OptionEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `Option` and its cursor. */
export type OptionEdge = {
  __typename?: 'OptionEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Option>;
};

export type OptionFilterSetType = {
  createdAfter?: InputMaybe<Scalars['DateTime']['input']>;
  createdBefore?: InputMaybe<Scalars['DateTime']['input']>;
  createdByGroup?: InputMaybe<Scalars['String']['input']>;
  createdByUser?: InputMaybe<Scalars['String']['input']>;
  invert?: InputMaybe<Scalars['Boolean']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  metaHasKey?: InputMaybe<Scalars['String']['input']>;
  metaValue?: InputMaybe<Array<InputMaybe<JsonValueFilterType>>>;
  modifiedAfter?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedBefore?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedByGroup?: InputMaybe<Scalars['String']['input']>;
  modifiedByUser?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  visibleInDocument?: InputMaybe<Scalars['ID']['input']>;
};

export type OptionOrderSetType = {
  attribute?: InputMaybe<SortableOptionAttributes>;
  direction?: InputMaybe<AscDesc>;
  meta?: InputMaybe<Scalars['String']['input']>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  _debug?: Maybe<DjangoDebug>;
  allAnalyticsFields?: Maybe<AnalyticsFieldConnection>;
  allAnalyticsTables?: Maybe<AnalyticsTableConnection>;
  allCases?: Maybe<CaseConnection>;
  allDataSources?: Maybe<DataSourceConnection>;
  allDocuments?: Maybe<DocumentConnection>;
  allFormatValidators?: Maybe<FormatValidatorConnection>;
  allForms?: Maybe<FormConnection>;
  allQuestions?: Maybe<QuestionConnection>;
  allTasks?: Maybe<TaskConnection>;
  allUsedDynamicOptions?: Maybe<DynamicOptionConnection>;
  allWorkItems?: Maybe<WorkItemConnection>;
  allWorkflows?: Maybe<WorkflowConnection>;
  analyticsTable?: Maybe<AnalyticsTable>;
  dataSource?: Maybe<DataSourceDataConnection>;
  documentValidity?: Maybe<DocumentValidityConnection>;
  node?: Maybe<Node>;
};


export type QueryAllAnalyticsFieldsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<AnalyticsFieldFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<AnalyticsFieldOrderSetType>>>;
};


export type QueryAllAnalyticsTablesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<AnalyticsTableFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<AnalyticsTableOrderSetType>>>;
};


export type QueryAllCasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<CaseFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<CaseOrderSetType>>>;
};


export type QueryAllDataSourcesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<DocumentFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<DocumentOrderSetType>>>;
};


export type QueryAllFormatValidatorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<FormFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormOrderSetType>>>;
};


export type QueryAllQuestionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<QuestionFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<QuestionOrderSetType>>>;
};


export type QueryAllTasksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<TaskFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<TaskOrderSetType>>>;
};


export type QueryAllUsedDynamicOptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<DynamicOptionFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<DynamicOptionOrderSetType>>>;
};


export type QueryAllWorkItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<WorkItemFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<WorkItemOrderSetType>>>;
};


export type QueryAllWorkflowsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<WorkflowFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<WorkflowOrderSetType>>>;
};


export type QueryAnalyticsTableArgs = {
  slug: Scalars['String']['input'];
};


export type QueryDataSourceArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  context?: InputMaybe<Scalars['JSONString']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  question?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDocumentValidityArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  dataSourceContext?: InputMaybe<Scalars['JSONString']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};

export type Question = {
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  forms?: Maybe<FormConnection>;
  id: Scalars['ID']['output'];
  infoText?: Maybe<Scalars['String']['output']>;
  isArchived: Scalars['Boolean']['output'];
  isHidden: Scalars['QuestionJexl']['output'];
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl']['output'];
  label: Scalars['String']['output'];
  meta: Scalars['GenericScalar']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  source?: Maybe<Question>;
};


export type QuestionFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<FormFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormOrderSetType>>>;
};

export type QuestionConnection = {
  __typename?: 'QuestionConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<QuestionEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `Question` and its cursor. */
export type QuestionEdge = {
  __typename?: 'QuestionEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Question>;
};

export type QuestionFilterSetType = {
  createdAfter?: InputMaybe<Scalars['DateTime']['input']>;
  createdBefore?: InputMaybe<Scalars['DateTime']['input']>;
  createdByGroup?: InputMaybe<Scalars['String']['input']>;
  createdByUser?: InputMaybe<Scalars['String']['input']>;
  excludeForms?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  invert?: InputMaybe<Scalars['Boolean']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['String']['input']>;
  isRequired?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  metaHasKey?: InputMaybe<Scalars['String']['input']>;
  metaValue?: InputMaybe<Array<InputMaybe<JsonValueFilterType>>>;
  modifiedAfter?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedBefore?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedByGroup?: InputMaybe<Scalars['String']['input']>;
  modifiedByUser?: InputMaybe<Scalars['String']['input']>;
  rowForm?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slugs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subForm?: InputMaybe<Scalars['ID']['input']>;
  visibleInDocument?: InputMaybe<Scalars['ID']['input']>;
};

export type QuestionOrderSetType = {
  attribute?: InputMaybe<SortableQuestionAttributes>;
  direction?: InputMaybe<AscDesc>;
  meta?: InputMaybe<Scalars['String']['input']>;
};

export type RedoWorkItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Provide extra context for dynamic jexl transforms and events */
  context?: InputMaybe<Scalars['JSONString']['input']>;
  id: Scalars['ID']['input'];
};

export type RedoWorkItemPayload = {
  __typename?: 'RedoWorkItemPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  workItem?: Maybe<WorkItem>;
};

export type RemoveAnalyticsFieldInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type RemoveAnalyticsFieldPayload = {
  __typename?: 'RemoveAnalyticsFieldPayload';
  analyticsField?: Maybe<AnalyticsField>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RemoveAnalyticsTableInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['ID']['input'];
};

export type RemoveAnalyticsTablePayload = {
  __typename?: 'RemoveAnalyticsTablePayload';
  analyticsTable?: Maybe<AnalyticsTable>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RemoveAnswerInput = {
  answer: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveAnswerPayload = {
  __typename?: 'RemoveAnswerPayload';
  answer?: Maybe<Answer>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type RemoveDefaultAnswerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  question: Scalars['ID']['input'];
};

export type RemoveDefaultAnswerPayload = {
  __typename?: 'RemoveDefaultAnswerPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  question?: Maybe<Question>;
};

export type RemoveDocumentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  document: Scalars['ID']['input'];
};

export type RemoveDocumentPayload = {
  __typename?: 'RemoveDocumentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  document?: Maybe<Document>;
};

export type RemoveFlowInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  flow: Scalars['ID']['input'];
};

export type RemoveFlowPayload = {
  __typename?: 'RemoveFlowPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  flow?: Maybe<Flow>;
};

export type RemoveFormQuestionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  form: Scalars['ID']['input'];
  question: Scalars['ID']['input'];
};

export type RemoveFormQuestionPayload = {
  __typename?: 'RemoveFormQuestionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  form?: Maybe<Form>;
};

export type ReopenCaseInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Provide extra context for dynamic jexl transforms and events */
  context?: InputMaybe<Scalars['JSONString']['input']>;
  id: Scalars['ID']['input'];
  /** List of work item ids to be readied when the case is reopened */
  workItems: Array<InputMaybe<Scalars['ID']['input']>>;
};

export type ReopenCasePayload = {
  __typename?: 'ReopenCasePayload';
  case?: Maybe<Case>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type ReorderAnalyticsFieldsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fields: Array<InputMaybe<Scalars['ID']['input']>>;
  table: Scalars['ID']['input'];
};

export type ReorderAnalyticsFieldsPayload = {
  __typename?: 'ReorderAnalyticsFieldsPayload';
  analyticsTable?: Maybe<AnalyticsTable>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type ReorderFormQuestionsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  form: Scalars['ID']['input'];
  questions: Array<InputMaybe<Scalars['ID']['input']>>;
};

export type ReorderFormQuestionsPayload = {
  __typename?: 'ReorderFormQuestionsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  form?: Maybe<Form>;
};

export type ResumeCaseInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Provide extra context for dynamic jexl transforms and events */
  context?: InputMaybe<Scalars['JSONString']['input']>;
  id: Scalars['ID']['input'];
};

export type ResumeCasePayload = {
  __typename?: 'ResumeCasePayload';
  case?: Maybe<Case>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type ResumeWorkItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Provide extra context for dynamic jexl transforms and events */
  context?: InputMaybe<Scalars['JSONString']['input']>;
  id: Scalars['ID']['input'];
};

export type ResumeWorkItemPayload = {
  __typename?: 'ResumeWorkItemPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  workItem?: Maybe<WorkItem>;
};

export type SaveActionButtonQuestionInput = {
  action: ButtonAction;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  color: ButtonColor;
  infoText?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['QuestionJexl']['input']>;
  label: Scalars['String']['input'];
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  showValidation: Scalars['Boolean']['input'];
  slug: Scalars['String']['input'];
  validateOnEnter: Scalars['Boolean']['input'];
};

export type SaveActionButtonQuestionPayload = {
  __typename?: 'SaveActionButtonQuestionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  question?: Maybe<Question>;
};

export type SaveAnalyticsFieldInput = {
  alias: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  createdByGroup?: InputMaybe<Scalars['String']['input']>;
  createdByUser?: InputMaybe<Scalars['String']['input']>;
  dataSource: Scalars['String']['input'];
  filters?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  function: AggregateFunction;
  id?: InputMaybe<Scalars['ID']['input']>;
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  modifiedByGroup?: InputMaybe<Scalars['String']['input']>;
  modifiedByUser?: InputMaybe<Scalars['String']['input']>;
  showOutput?: InputMaybe<Scalars['Boolean']['input']>;
  table: Scalars['ID']['input'];
};

export type SaveAnalyticsFieldPayload = {
  __typename?: 'SaveAnalyticsFieldPayload';
  analyticsField?: Maybe<AnalyticsField>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SaveAnalyticsTableInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  createdByGroup?: InputMaybe<Scalars['String']['input']>;
  createdByUser?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  disableVisibilities?: InputMaybe<Scalars['Boolean']['input']>;
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  modifiedByGroup?: InputMaybe<Scalars['String']['input']>;
  modifiedByUser?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  startingObject: StartingObject;
};

export type SaveAnalyticsTablePayload = {
  __typename?: 'SaveAnalyticsTablePayload';
  analyticsTable?: Maybe<AnalyticsTable>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SaveCalculatedFloatQuestionInput = {
  calcExpression?: InputMaybe<Scalars['QuestionJexl']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  hintText?: InputMaybe<Scalars['String']['input']>;
  infoText?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['QuestionJexl']['input']>;
  isRequired?: InputMaybe<Scalars['QuestionJexl']['input']>;
  label: Scalars['String']['input'];
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  slug: Scalars['String']['input'];
};

export type SaveCalculatedFloatQuestionPayload = {
  __typename?: 'SaveCalculatedFloatQuestionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  question?: Maybe<Question>;
};

export type SaveCaseInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Provide extra context for dynamic jexl transforms and events */
  context?: InputMaybe<Scalars['JSONString']['input']>;
  form?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  parentWorkItem?: InputMaybe<Scalars['ID']['input']>;
  workflow: Scalars['ID']['input'];
};

export type SaveCasePayload = {
  __typename?: 'SaveCasePayload';
  case?: Maybe<Case>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SaveChoiceQuestionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  formatValidators?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hintText?: InputMaybe<Scalars['String']['input']>;
  infoText?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['QuestionJexl']['input']>;
  isRequired?: InputMaybe<Scalars['QuestionJexl']['input']>;
  label: Scalars['String']['input'];
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  options: Array<InputMaybe<Scalars['ID']['input']>>;
  slug: Scalars['String']['input'];
};

export type SaveChoiceQuestionPayload = {
  __typename?: 'SaveChoiceQuestionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  question?: Maybe<Question>;
};

export type SaveCompleteTaskFormTaskInput = {
  /** Group jexl returning what group(s) derived work items will be addressed to. */
  addressGroups?: InputMaybe<Scalars['GroupJexl']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Whether to continue the flow if the multiple instance work item has ready siblings */
  continueAsync?: InputMaybe<Scalars['Boolean']['input']>;
  /** Group jexl returning what group(s) derived work items will be assigned to for controlling. */
  controlGroups?: InputMaybe<Scalars['GroupJexl']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  form: Scalars['ID']['input'];
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  /** Allows creating multiple work items for this task using the `CreateWorkItem` mutation. If true, one work item will be created for each entry in `address_groups`. */
  isMultipleInstance?: InputMaybe<Scalars['Boolean']['input']>;
  /** Time in seconds task may take to be processed. */
  leadTime?: InputMaybe<Scalars['Int']['input']>;
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type SaveCompleteTaskFormTaskPayload = {
  __typename?: 'SaveCompleteTaskFormTaskPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  task?: Maybe<Task>;
};

export type SaveCompleteWorkflowFormTaskInput = {
  /** Group jexl returning what group(s) derived work items will be addressed to. */
  addressGroups?: InputMaybe<Scalars['GroupJexl']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Whether to continue the flow if the multiple instance work item has ready siblings */
  continueAsync?: InputMaybe<Scalars['Boolean']['input']>;
  /** Group jexl returning what group(s) derived work items will be assigned to for controlling. */
  controlGroups?: InputMaybe<Scalars['GroupJexl']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  /** Allows creating multiple work items for this task using the `CreateWorkItem` mutation. If true, one work item will be created for each entry in `address_groups`. */
  isMultipleInstance?: InputMaybe<Scalars['Boolean']['input']>;
  /** Time in seconds task may take to be processed. */
  leadTime?: InputMaybe<Scalars['Int']['input']>;
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type SaveCompleteWorkflowFormTaskPayload = {
  __typename?: 'SaveCompleteWorkflowFormTaskPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  task?: Maybe<Task>;
};

export type SaveDateQuestionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  formatValidators?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hintText?: InputMaybe<Scalars['String']['input']>;
  infoText?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['QuestionJexl']['input']>;
  isRequired?: InputMaybe<Scalars['QuestionJexl']['input']>;
  label: Scalars['String']['input'];
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  slug: Scalars['String']['input'];
};

export type SaveDateQuestionPayload = {
  __typename?: 'SaveDateQuestionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  question?: Maybe<Question>;
};

export type SaveDefaultDateAnswerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  question: Scalars['ID']['input'];
  value?: InputMaybe<Scalars['Date']['input']>;
};

export type SaveDefaultDateAnswerPayload = {
  __typename?: 'SaveDefaultDateAnswerPayload';
  answer?: Maybe<Answer>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SaveDefaultFloatAnswerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  question: Scalars['ID']['input'];
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type SaveDefaultFloatAnswerPayload = {
  __typename?: 'SaveDefaultFloatAnswerPayload';
  answer?: Maybe<Answer>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SaveDefaultIntegerAnswerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  question: Scalars['ID']['input'];
  value?: InputMaybe<Scalars['Int']['input']>;
};

export type SaveDefaultIntegerAnswerPayload = {
  __typename?: 'SaveDefaultIntegerAnswerPayload';
  answer?: Maybe<Answer>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SaveDefaultListAnswerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  question: Scalars['ID']['input'];
  value?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SaveDefaultListAnswerPayload = {
  __typename?: 'SaveDefaultListAnswerPayload';
  answer?: Maybe<Answer>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SaveDefaultStringAnswerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  question: Scalars['ID']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SaveDefaultStringAnswerPayload = {
  __typename?: 'SaveDefaultStringAnswerPayload';
  answer?: Maybe<Answer>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SaveDefaultTableAnswerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  question: Scalars['ID']['input'];
  /** List of document IDs representing the rows in the table. */
  value?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type SaveDefaultTableAnswerPayload = {
  __typename?: 'SaveDefaultTableAnswerPayload';
  answer?: Maybe<Answer>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SaveDocumentDateAnswerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** JSON object passed as context to the data source of dynamic questions */
  dataSourceContext?: InputMaybe<Scalars['JSONString']['input']>;
  document: Scalars['ID']['input'];
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  question: Scalars['ID']['input'];
  value?: InputMaybe<Scalars['Date']['input']>;
};

export type SaveDocumentDateAnswerPayload = {
  __typename?: 'SaveDocumentDateAnswerPayload';
  answer?: Maybe<Answer>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SaveDocumentFilesAnswerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** JSON object passed as context to the data source of dynamic questions */
  dataSourceContext?: InputMaybe<Scalars['JSONString']['input']>;
  document: Scalars['ID']['input'];
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  question: Scalars['ID']['input'];
  value?: InputMaybe<Array<InputMaybe<SaveFile>>>;
};

export type SaveDocumentFilesAnswerPayload = {
  __typename?: 'SaveDocumentFilesAnswerPayload';
  answer?: Maybe<Answer>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SaveDocumentFloatAnswerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** JSON object passed as context to the data source of dynamic questions */
  dataSourceContext?: InputMaybe<Scalars['JSONString']['input']>;
  document: Scalars['ID']['input'];
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  question: Scalars['ID']['input'];
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type SaveDocumentFloatAnswerPayload = {
  __typename?: 'SaveDocumentFloatAnswerPayload';
  answer?: Maybe<Answer>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SaveDocumentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  form: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSONString']['input']>;
};

export type SaveDocumentIntegerAnswerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** JSON object passed as context to the data source of dynamic questions */
  dataSourceContext?: InputMaybe<Scalars['JSONString']['input']>;
  document: Scalars['ID']['input'];
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  question: Scalars['ID']['input'];
  value?: InputMaybe<Scalars['Int']['input']>;
};

export type SaveDocumentIntegerAnswerPayload = {
  __typename?: 'SaveDocumentIntegerAnswerPayload';
  answer?: Maybe<Answer>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SaveDocumentListAnswerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** JSON object passed as context to the data source of dynamic questions */
  dataSourceContext?: InputMaybe<Scalars['JSONString']['input']>;
  document: Scalars['ID']['input'];
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  question: Scalars['ID']['input'];
  value?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SaveDocumentListAnswerPayload = {
  __typename?: 'SaveDocumentListAnswerPayload';
  answer?: Maybe<Answer>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SaveDocumentPayload = {
  __typename?: 'SaveDocumentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  document?: Maybe<Document>;
};

export type SaveDocumentStringAnswerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** JSON object passed as context to the data source of dynamic questions */
  dataSourceContext?: InputMaybe<Scalars['JSONString']['input']>;
  document: Scalars['ID']['input'];
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  question: Scalars['ID']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type SaveDocumentStringAnswerPayload = {
  __typename?: 'SaveDocumentStringAnswerPayload';
  answer?: Maybe<Answer>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SaveDocumentTableAnswerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** JSON object passed as context to the data source of dynamic questions */
  dataSourceContext?: InputMaybe<Scalars['JSONString']['input']>;
  document: Scalars['ID']['input'];
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  question: Scalars['ID']['input'];
  /** List of document IDs representing the rows in the table. */
  value?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type SaveDocumentTableAnswerPayload = {
  __typename?: 'SaveDocumentTableAnswerPayload';
  answer?: Maybe<Answer>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SaveDynamicChoiceQuestionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  dataSource: Scalars['String']['input'];
  formatValidators?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hintText?: InputMaybe<Scalars['String']['input']>;
  infoText?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['QuestionJexl']['input']>;
  isRequired?: InputMaybe<Scalars['QuestionJexl']['input']>;
  label: Scalars['String']['input'];
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  slug: Scalars['String']['input'];
};

export type SaveDynamicChoiceQuestionPayload = {
  __typename?: 'SaveDynamicChoiceQuestionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  question?: Maybe<Question>;
};

export type SaveDynamicMultipleChoiceQuestionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  dataSource: Scalars['String']['input'];
  formatValidators?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hintText?: InputMaybe<Scalars['String']['input']>;
  infoText?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['QuestionJexl']['input']>;
  isRequired?: InputMaybe<Scalars['QuestionJexl']['input']>;
  label: Scalars['String']['input'];
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  slug: Scalars['String']['input'];
};

export type SaveDynamicMultipleChoiceQuestionPayload = {
  __typename?: 'SaveDynamicMultipleChoiceQuestionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  question?: Maybe<Question>;
};

export type SaveFile = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SaveFilesQuestionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  formatValidators?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hintText?: InputMaybe<Scalars['String']['input']>;
  infoText?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['QuestionJexl']['input']>;
  isRequired?: InputMaybe<Scalars['QuestionJexl']['input']>;
  label: Scalars['String']['input'];
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  slug: Scalars['String']['input'];
};

export type SaveFilesQuestionPayload = {
  __typename?: 'SaveFilesQuestionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  question?: Maybe<Question>;
};

export type SaveFloatQuestionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  formatValidators?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hintText?: InputMaybe<Scalars['String']['input']>;
  infoText?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['QuestionJexl']['input']>;
  isRequired?: InputMaybe<Scalars['QuestionJexl']['input']>;
  label: Scalars['String']['input'];
  maxValue?: InputMaybe<Scalars['Float']['input']>;
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  minValue?: InputMaybe<Scalars['Float']['input']>;
  placeholder?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  step?: InputMaybe<Scalars['Float']['input']>;
};

export type SaveFloatQuestionPayload = {
  __typename?: 'SaveFloatQuestionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  question?: Maybe<Question>;
};

export type SaveFormInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type SaveFormPayload = {
  __typename?: 'SaveFormPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  form?: Maybe<Form>;
};

export type SaveFormQuestionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  infoText?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['QuestionJexl']['input']>;
  isRequired?: InputMaybe<Scalars['QuestionJexl']['input']>;
  label: Scalars['String']['input'];
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  slug: Scalars['String']['input'];
  subForm: Scalars['ID']['input'];
};

export type SaveFormQuestionPayload = {
  __typename?: 'SaveFormQuestionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  question?: Maybe<Question>;
};

export type SaveIntegerQuestionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  formatValidators?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hintText?: InputMaybe<Scalars['String']['input']>;
  infoText?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['QuestionJexl']['input']>;
  isRequired?: InputMaybe<Scalars['QuestionJexl']['input']>;
  label: Scalars['String']['input'];
  maxValue?: InputMaybe<Scalars['Int']['input']>;
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  minValue?: InputMaybe<Scalars['Int']['input']>;
  placeholder?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
};

export type SaveIntegerQuestionPayload = {
  __typename?: 'SaveIntegerQuestionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  question?: Maybe<Question>;
};

export type SaveMultipleChoiceQuestionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  formatValidators?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hintText?: InputMaybe<Scalars['String']['input']>;
  infoText?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['QuestionJexl']['input']>;
  isRequired?: InputMaybe<Scalars['QuestionJexl']['input']>;
  label: Scalars['String']['input'];
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  options: Array<InputMaybe<Scalars['ID']['input']>>;
  slug: Scalars['String']['input'];
};

export type SaveMultipleChoiceQuestionPayload = {
  __typename?: 'SaveMultipleChoiceQuestionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  question?: Maybe<Question>;
};

export type SaveOptionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['QuestionJexl']['input']>;
  label: Scalars['String']['input'];
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  slug: Scalars['String']['input'];
};

export type SaveOptionPayload = {
  __typename?: 'SaveOptionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  option?: Maybe<Option>;
};

export type SaveSimpleTaskInput = {
  /** Group jexl returning what group(s) derived work items will be addressed to. */
  addressGroups?: InputMaybe<Scalars['GroupJexl']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Whether to continue the flow if the multiple instance work item has ready siblings */
  continueAsync?: InputMaybe<Scalars['Boolean']['input']>;
  /** Group jexl returning what group(s) derived work items will be assigned to for controlling. */
  controlGroups?: InputMaybe<Scalars['GroupJexl']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  /** Allows creating multiple work items for this task using the `CreateWorkItem` mutation. If true, one work item will be created for each entry in `address_groups`. */
  isMultipleInstance?: InputMaybe<Scalars['Boolean']['input']>;
  /** Time in seconds task may take to be processed. */
  leadTime?: InputMaybe<Scalars['Int']['input']>;
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type SaveSimpleTaskPayload = {
  __typename?: 'SaveSimpleTaskPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  task?: Maybe<Task>;
};

export type SaveStaticQuestionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  infoText?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['QuestionJexl']['input']>;
  label: Scalars['String']['input'];
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  slug: Scalars['String']['input'];
  staticContent?: InputMaybe<Scalars['String']['input']>;
};

export type SaveStaticQuestionPayload = {
  __typename?: 'SaveStaticQuestionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  question?: Maybe<Question>;
};

export type SaveTableQuestionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  formatValidators?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hintText?: InputMaybe<Scalars['String']['input']>;
  infoText?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['QuestionJexl']['input']>;
  isRequired?: InputMaybe<Scalars['QuestionJexl']['input']>;
  label: Scalars['String']['input'];
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  /** Form that represents rows of a TableQuestion */
  rowForm: Scalars['ID']['input'];
  slug: Scalars['String']['input'];
};

export type SaveTableQuestionPayload = {
  __typename?: 'SaveTableQuestionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  question?: Maybe<Question>;
};

export type SaveTextQuestionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  formatValidators?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hintText?: InputMaybe<Scalars['String']['input']>;
  infoText?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['QuestionJexl']['input']>;
  isRequired?: InputMaybe<Scalars['QuestionJexl']['input']>;
  label: Scalars['String']['input'];
  maxLength?: InputMaybe<Scalars['Int']['input']>;
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  minLength?: InputMaybe<Scalars['Int']['input']>;
  placeholder?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
};

export type SaveTextQuestionPayload = {
  __typename?: 'SaveTextQuestionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  question?: Maybe<Question>;
};

export type SaveTextareaQuestionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  formatValidators?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hintText?: InputMaybe<Scalars['String']['input']>;
  infoText?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isHidden?: InputMaybe<Scalars['QuestionJexl']['input']>;
  isRequired?: InputMaybe<Scalars['QuestionJexl']['input']>;
  label: Scalars['String']['input'];
  maxLength?: InputMaybe<Scalars['Int']['input']>;
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  minLength?: InputMaybe<Scalars['Int']['input']>;
  placeholder?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
};

export type SaveTextareaQuestionPayload = {
  __typename?: 'SaveTextareaQuestionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  question?: Maybe<Question>;
};

export type SaveWorkItemInput = {
  /** Users responsible to undertake given work item. */
  assignedUsers?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Provide extra context for dynamic jexl transforms and events */
  context?: InputMaybe<Scalars['JSONString']['input']>;
  deadline?: InputMaybe<Scalars['DateTime']['input']>;
  /** Will be set from Task, if not provided. */
  description?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  /** Will be set from Task, if not provided. */
  name?: InputMaybe<Scalars['String']['input']>;
  workItem: Scalars['ID']['input'];
};

export type SaveWorkItemPayload = {
  __typename?: 'SaveWorkItemPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  workItem?: Maybe<WorkItem>;
};

export type SaveWorkflowInput = {
  /** Allow workflow to be started with any form */
  allowAllForms?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of forms which are allowed to start workflow with */
  allowForms?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  meta?: InputMaybe<Scalars['JSONString']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  /** Starting task(s) of the workflow. */
  startTasks: Array<InputMaybe<Scalars['ID']['input']>>;
};

export type SaveWorkflowPayload = {
  __typename?: 'SaveWorkflowPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  workflow?: Maybe<Workflow>;
};

/**
 * Lookup type to search in answers.
 *
 * You may pass in a list of question slugs and/or a list of form slugs to define
 * which answers to search. If you pass in one or more forms, answers to the
 * questions in that form will be searched. If you pass in one or more question
 * slugs, the corresponding answers are searched. If you pass both, a superset
 * of both is searched (ie. they do not limit each other).
 */
export type SearchAnswersFilterType = {
  forms?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lookup?: InputMaybe<SearchLookupMode>;
  questions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  value: Scalars['GenericScalar']['input'];
};

/**
 * Lookup used in SearchAnswersFilterType.
 *
 * Keep in mind that the SearchAnswer filter operates on a word-by-word basis.
 * This defines the lookup used for every single word.
 */
export enum SearchLookupMode {
  Contains = 'CONTAINS',
  ExactWord = 'EXACT_WORD',
  Startswith = 'STARTSWITH',
  Text = 'TEXT'
}

export type SelectedOption = {
  __typename?: 'SelectedOption';
  label: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type SelectedOptionConnection = {
  __typename?: 'SelectedOptionConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SelectedOptionEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `SelectedOption` and its cursor. */
export type SelectedOptionEdge = {
  __typename?: 'SelectedOptionEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SelectedOption>;
};

export type SimpleTask = Node & Task & {
  __typename?: 'SimpleTask';
  addressGroups?: Maybe<Scalars['GroupJexl']['output']>;
  continueAsync?: Maybe<Scalars['Boolean']['output']>;
  controlGroups?: Maybe<Scalars['GroupJexl']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isArchived: Scalars['Boolean']['output'];
  isMultipleInstance: Scalars['Boolean']['output'];
  /** Time in seconds task may take to be processed. */
  leadTime?: Maybe<Scalars['Int']['output']>;
  meta: Scalars['GenericScalar']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type SkipWorkItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Provide extra context for dynamic jexl transforms and events */
  context?: InputMaybe<Scalars['JSONString']['input']>;
  id: Scalars['ID']['input'];
};

export type SkipWorkItemPayload = {
  __typename?: 'SkipWorkItemPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  workItem?: Maybe<WorkItem>;
};

export enum SortableAnalyticsFieldAttributes {
  Alias = 'ALIAS',
  CreatedAt = 'CREATED_AT',
  ModifiedAt = 'MODIFIED_AT'
}

export enum SortableAnalyticsTableAttributes {
  CreatedAt = 'CREATED_AT',
  Description = 'DESCRIPTION',
  ModifiedAt = 'MODIFIED_AT',
  Name = 'NAME',
  Slug = 'SLUG'
}

export enum SortableAnswerAttributes {
  CreatedAt = 'CREATED_AT',
  Date = 'DATE',
  ModifiedAt = 'MODIFIED_AT',
  Question = 'QUESTION',
  Value = 'VALUE'
}

export enum SortableCaseAttributes {
  CreatedAt = 'CREATED_AT',
  DocumentFormName = 'DOCUMENT__FORM__NAME',
  ModifiedAt = 'MODIFIED_AT',
  Status = 'STATUS'
}

export enum SortableDocumentAttributes {
  CreatedAt = 'CREATED_AT',
  Form = 'FORM',
  ModifiedAt = 'MODIFIED_AT'
}

export enum SortableDynamicOptionAttributes {
  CreatedAt = 'CREATED_AT',
  Label = 'LABEL',
  ModifiedAt = 'MODIFIED_AT',
  Question = 'QUESTION',
  Slug = 'SLUG'
}

export enum SortableFlowAttributes {
  CreatedAt = 'CREATED_AT',
  ModifiedAt = 'MODIFIED_AT',
  Task = 'TASK'
}

export enum SortableFormAttributes {
  CreatedAt = 'CREATED_AT',
  Description = 'DESCRIPTION',
  IsArchived = 'IS_ARCHIVED',
  IsPublished = 'IS_PUBLISHED',
  ModifiedAt = 'MODIFIED_AT',
  Name = 'NAME',
  Slug = 'SLUG'
}

export enum SortableOptionAttributes {
  CreatedAt = 'CREATED_AT',
  IsArchived = 'IS_ARCHIVED',
  Label = 'LABEL',
  ModifiedAt = 'MODIFIED_AT',
  Slug = 'SLUG'
}

export enum SortableQuestionAttributes {
  CalcExpression = 'CALC_EXPRESSION',
  CreatedAt = 'CREATED_AT',
  HintText = 'HINT_TEXT',
  InfoText = 'INFO_TEXT',
  IsArchived = 'IS_ARCHIVED',
  IsHidden = 'IS_HIDDEN',
  IsRequired = 'IS_REQUIRED',
  Label = 'LABEL',
  ModifiedAt = 'MODIFIED_AT',
  Placeholder = 'PLACEHOLDER',
  Slug = 'SLUG',
  Type = 'TYPE'
}

export enum SortableTaskAttributes {
  CreatedAt = 'CREATED_AT',
  Description = 'DESCRIPTION',
  IsArchived = 'IS_ARCHIVED',
  LeadTime = 'LEAD_TIME',
  ModifiedAt = 'MODIFIED_AT',
  Name = 'NAME',
  Slug = 'SLUG',
  Type = 'TYPE'
}

export enum SortableWorkItemAttributes {
  CaseDocumentFormName = 'CASE__DOCUMENT__FORM__NAME',
  ClosedAt = 'CLOSED_AT',
  CreatedAt = 'CREATED_AT',
  Deadline = 'DEADLINE',
  Description = 'DESCRIPTION',
  ModifiedAt = 'MODIFIED_AT',
  Name = 'NAME',
  Slug = 'SLUG',
  Status = 'STATUS'
}

export enum SortableWorkflowAttributes {
  AllowAllForms = 'ALLOW_ALL_FORMS',
  CreatedAt = 'CREATED_AT',
  Description = 'DESCRIPTION',
  IsArchived = 'IS_ARCHIVED',
  IsPublished = 'IS_PUBLISHED',
  ModifiedAt = 'MODIFIED_AT',
  Name = 'NAME',
  Slug = 'SLUG'
}

/** An enumeration. */
export enum StartingObject {
  Cases = 'CASES',
  Documents = 'DOCUMENTS',
  WorkItems = 'WORK_ITEMS'
}

export type StaticQuestion = Node & Question & {
  __typename?: 'StaticQuestion';
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  dataSource?: Maybe<Scalars['String']['output']>;
  forms?: Maybe<FormConnection>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  infoText?: Maybe<Scalars['String']['output']>;
  isArchived: Scalars['Boolean']['output'];
  isHidden: Scalars['QuestionJexl']['output'];
  /** Required expression is only evaluated when question is not hidden. This should not be used for `StaticQuestion`, because it can never be satisfied. */
  isRequired: Scalars['QuestionJexl']['output'];
  label: Scalars['String']['output'];
  meta: Scalars['GenericScalar']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  source?: Maybe<Question>;
  staticContent?: Maybe<Scalars['String']['output']>;
};


export type StaticQuestionFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<FormFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormOrderSetType>>>;
};

/** An enumeration. */
export enum Status {
  /** Work item is canceled. */
  Canceled = 'CANCELED',
  /** Work item is done. */
  Completed = 'COMPLETED',
  /** Work item is ready to be processed. */
  Ready = 'READY',
  /** Work item has been marked for redo. */
  Redo = 'REDO',
  /** Work item is skipped. */
  Skipped = 'SKIPPED',
  /** Work item is suspended. */
  Suspended = 'SUSPENDED'
}

export type StringAnswer = Answer & Node & {
  __typename?: 'StringAnswer';
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  meta: Scalars['GenericScalar']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  question: Question;
  selectedOption?: Maybe<SelectedOption>;
  value?: Maybe<Scalars['String']['output']>;
};

export type SuspendCaseInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Provide extra context for dynamic jexl transforms and events */
  context?: InputMaybe<Scalars['JSONString']['input']>;
  id: Scalars['ID']['input'];
};

export type SuspendCasePayload = {
  __typename?: 'SuspendCasePayload';
  case?: Maybe<Case>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type SuspendWorkItemInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Provide extra context for dynamic jexl transforms and events */
  context?: InputMaybe<Scalars['JSONString']['input']>;
  id: Scalars['ID']['input'];
};

export type SuspendWorkItemPayload = {
  __typename?: 'SuspendWorkItemPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  workItem?: Maybe<WorkItem>;
};

export type TableAnswer = Answer & Node & {
  __typename?: 'TableAnswer';
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  document?: Maybe<Document>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  meta: Scalars['GenericScalar']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  question: Question;
  value?: Maybe<Array<Maybe<Document>>>;
};

export type TableQuestion = Node & Question & {
  __typename?: 'TableQuestion';
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  defaultAnswer?: Maybe<TableAnswer>;
  formatValidators?: Maybe<FormatValidatorConnection>;
  forms?: Maybe<FormConnection>;
  hintText?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  infoText?: Maybe<Scalars['String']['output']>;
  isArchived: Scalars['Boolean']['output'];
  isHidden: Scalars['QuestionJexl']['output'];
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl']['output'];
  label: Scalars['String']['output'];
  meta: Scalars['GenericScalar']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  /** Form that represents rows of a TableQuestion */
  rowForm?: Maybe<Form>;
  slug: Scalars['String']['output'];
  source?: Maybe<Question>;
};


export type TableQuestionFormatValidatorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type TableQuestionFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<FormFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormOrderSetType>>>;
};

export type Task = {
  addressGroups?: Maybe<Scalars['GroupJexl']['output']>;
  continueAsync?: Maybe<Scalars['Boolean']['output']>;
  controlGroups?: Maybe<Scalars['GroupJexl']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isArchived: Scalars['Boolean']['output'];
  isMultipleInstance: Scalars['Boolean']['output'];
  meta: Scalars['GenericScalar']['output'];
  modifiedAt: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type TaskConnection = {
  __typename?: 'TaskConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TaskEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `Task` and its cursor. */
export type TaskEdge = {
  __typename?: 'TaskEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Task>;
};

export type TaskFilterSetType = {
  createdAfter?: InputMaybe<Scalars['DateTime']['input']>;
  createdBefore?: InputMaybe<Scalars['DateTime']['input']>;
  createdByGroup?: InputMaybe<Scalars['String']['input']>;
  createdByUser?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  invert?: InputMaybe<Scalars['Boolean']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  metaHasKey?: InputMaybe<Scalars['String']['input']>;
  metaValue?: InputMaybe<Array<InputMaybe<JsonValueFilterType>>>;
  modifiedAfter?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedBefore?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedByGroup?: InputMaybe<Scalars['String']['input']>;
  modifiedByUser?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slugs?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Type>;
};

export type TaskOrderSetType = {
  attribute?: InputMaybe<SortableTaskAttributes>;
  direction?: InputMaybe<AscDesc>;
  meta?: InputMaybe<Scalars['String']['input']>;
};

export type TextQuestion = Node & Question & {
  __typename?: 'TextQuestion';
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  defaultAnswer?: Maybe<StringAnswer>;
  formatValidators?: Maybe<FormatValidatorConnection>;
  forms?: Maybe<FormConnection>;
  hintText?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  infoText?: Maybe<Scalars['String']['output']>;
  isArchived: Scalars['Boolean']['output'];
  isHidden: Scalars['QuestionJexl']['output'];
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl']['output'];
  label: Scalars['String']['output'];
  maxLength?: Maybe<Scalars['Int']['output']>;
  meta: Scalars['GenericScalar']['output'];
  minLength?: Maybe<Scalars['Int']['output']>;
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  placeholder?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  source?: Maybe<Question>;
};


export type TextQuestionFormatValidatorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type TextQuestionFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<FormFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormOrderSetType>>>;
};

export type TextareaQuestion = Node & Question & {
  __typename?: 'TextareaQuestion';
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  defaultAnswer?: Maybe<StringAnswer>;
  formatValidators?: Maybe<FormatValidatorConnection>;
  forms?: Maybe<FormConnection>;
  hintText?: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  infoText?: Maybe<Scalars['String']['output']>;
  isArchived: Scalars['Boolean']['output'];
  isHidden: Scalars['QuestionJexl']['output'];
  /** Required expression is only evaluated when question is not hidden. */
  isRequired: Scalars['QuestionJexl']['output'];
  label: Scalars['String']['output'];
  maxLength?: Maybe<Scalars['Int']['output']>;
  meta: Scalars['GenericScalar']['output'];
  minLength?: Maybe<Scalars['Int']['output']>;
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  placeholder?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  source?: Maybe<Question>;
};


export type TextareaQuestionFormatValidatorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type TextareaQuestionFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<FormFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormOrderSetType>>>;
};

/** An enumeration. */
export enum Type {
  /** Task to complete a defined task form. */
  CompleteTaskForm = 'COMPLETE_TASK_FORM',
  /** Task to complete a defined workflow form. */
  CompleteWorkflowForm = 'COMPLETE_WORKFLOW_FORM',
  /** Task which can simply be marked as completed. */
  Simple = 'SIMPLE'
}

export type ValidationEntry = {
  __typename?: 'ValidationEntry';
  errorMsg: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type ValidationResult = {
  __typename?: 'ValidationResult';
  errors?: Maybe<Array<Maybe<ValidationEntry>>>;
  id?: Maybe<Scalars['ID']['output']>;
  isValid?: Maybe<Scalars['Boolean']['output']>;
};

export type WorkItem = Node & {
  __typename?: 'WorkItem';
  addressedGroups: Array<Maybe<Scalars['String']['output']>>;
  assignedUsers: Array<Maybe<Scalars['String']['output']>>;
  case: Case;
  /** Defines case of a sub-workflow */
  childCase?: Maybe<Case>;
  /** Time when work item has either been canceled or completed */
  closedAt?: Maybe<Scalars['DateTime']['output']>;
  closedByGroup?: Maybe<Scalars['String']['output']>;
  closedByUser?: Maybe<Scalars['String']['output']>;
  controllingGroups: Array<Maybe<Scalars['String']['output']>>;
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  deadline?: Maybe<Scalars['DateTime']['output']>;
  /** Will be set from Task, if not provided. */
  description?: Maybe<Scalars['String']['output']>;
  document?: Maybe<Document>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** This property potentially performs poorly if used in a large setof entries, as the evaluation of the redoable jexl configurationcannot be performed on the database level. Please use carefully. */
  isRedoable?: Maybe<Scalars['Boolean']['output']>;
  meta?: Maybe<Scalars['GenericScalar']['output']>;
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  /** Will be set from Task, if not provided. */
  name: Scalars['String']['output'];
  previousWorkItem?: Maybe<WorkItem>;
  status: WorkItemStatus;
  succeedingWorkItems: WorkItemConnection;
  task: Task;
};


export type WorkItemSucceedingWorkItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type WorkItemConnection = {
  __typename?: 'WorkItemConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<WorkItemEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `WorkItem` and its cursor. */
export type WorkItemEdge = {
  __typename?: 'WorkItemEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<WorkItem>;
};

export type WorkItemFilterSetType = {
  addressedGroups?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assignedUsers?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  case?: InputMaybe<Scalars['ID']['input']>;
  caseDocumentForms?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  caseDocumentHasAnswer?: InputMaybe<Array<InputMaybe<HasAnswerFilterType>>>;
  caseFamily?: InputMaybe<Scalars['ID']['input']>;
  caseMetaValue?: InputMaybe<Array<InputMaybe<JsonValueFilterType>>>;
  caseSearchAnswers?: InputMaybe<Array<InputMaybe<SearchAnswersFilterType>>>;
  closedAt?: InputMaybe<Scalars['DateTime']['input']>;
  controllingGroups?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  createdAfter?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBefore?: InputMaybe<Scalars['DateTime']['input']>;
  createdByGroup?: InputMaybe<Scalars['String']['input']>;
  createdByUser?: InputMaybe<Scalars['String']['input']>;
  deadline?: InputMaybe<Scalars['DateTime']['input']>;
  deadlineAfter?: InputMaybe<Scalars['DateTime']['input']>;
  deadlineBefore?: InputMaybe<Scalars['DateTime']['input']>;
  documentHasAnswer?: InputMaybe<Array<InputMaybe<HasAnswerFilterType>>>;
  hasDeadline?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  invert?: InputMaybe<Scalars['Boolean']['input']>;
  metaHasKey?: InputMaybe<Scalars['String']['input']>;
  metaValue?: InputMaybe<Array<InputMaybe<JsonValueFilterType>>>;
  modifiedAfter?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedAt?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedBefore?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedByGroup?: InputMaybe<Scalars['String']['input']>;
  modifiedByUser?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rootCaseMetaValue?: InputMaybe<Array<InputMaybe<JsonValueFilterType>>>;
  status?: InputMaybe<Status>;
  task?: InputMaybe<Scalars['ID']['input']>;
  tasks?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type WorkItemOrderSetType = {
  attribute?: InputMaybe<SortableWorkItemAttributes>;
  caseDocumentAnswer?: InputMaybe<Scalars['String']['input']>;
  caseMeta?: InputMaybe<Scalars['String']['input']>;
  direction?: InputMaybe<AscDesc>;
  documentAnswer?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Scalars['String']['input']>;
};

/** An enumeration. */
export enum WorkItemStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Ready = 'READY',
  Redo = 'REDO',
  Skipped = 'SKIPPED',
  Suspended = 'SUSPENDED'
}

export type Workflow = Node & {
  __typename?: 'Workflow';
  /** Allow workflow to be started with any form */
  allowAllForms: Scalars['Boolean']['output'];
  /** List of forms which are allowed to start workflow with */
  allowForms: FormConnection;
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Scalars['String']['output']>;
  createdByUser?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  flows?: Maybe<FlowConnection>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isArchived: Scalars['Boolean']['output'];
  isPublished: Scalars['Boolean']['output'];
  meta?: Maybe<Scalars['GenericScalar']['output']>;
  modifiedAt: Scalars['DateTime']['output'];
  modifiedByGroup?: Maybe<Scalars['String']['output']>;
  modifiedByUser?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  startTasks: Array<Maybe<Task>>;
  /** List of tasks referenced in workflow */
  tasks: Array<Maybe<Task>>;
};


export type WorkflowAllowFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type WorkflowFlowsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InputMaybe<FlowFilterSetType>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<InputMaybe<FlowOrderSetType>>>;
};

export type WorkflowConnection = {
  __typename?: 'WorkflowConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<WorkflowEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `Workflow` and its cursor. */
export type WorkflowEdge = {
  __typename?: 'WorkflowEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Workflow>;
};

export type WorkflowFilterSetType = {
  createdAfter?: InputMaybe<Scalars['DateTime']['input']>;
  createdBefore?: InputMaybe<Scalars['DateTime']['input']>;
  createdByGroup?: InputMaybe<Scalars['String']['input']>;
  createdByUser?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  invert?: InputMaybe<Scalars['Boolean']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  metaHasKey?: InputMaybe<Scalars['String']['input']>;
  metaValue?: InputMaybe<Array<InputMaybe<JsonValueFilterType>>>;
  modifiedAfter?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedBefore?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedByGroup?: InputMaybe<Scalars['String']['input']>;
  modifiedByUser?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type WorkflowOrderSetType = {
  attribute?: InputMaybe<SortableWorkflowAttributes>;
  direction?: InputMaybe<AscDesc>;
  meta?: InputMaybe<Scalars['String']['input']>;
};
