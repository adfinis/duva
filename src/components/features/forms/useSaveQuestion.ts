import { useMutation } from '@apollo/client/react';
import {
  SaveChoiceQuestionDocument,
  type SaveChoiceQuestionInput,
  SaveDateQuestionDocument,
  type SaveDateQuestionInput,
  SaveFloatQuestionDocument,
  type SaveFloatQuestionInput,
  SaveIntegerQuestionDocument,
  type SaveIntegerQuestionInput,
  SaveMultipleChoiceQuestionDocument,
  type SaveMultipleChoiceQuestionInput,
  SaveTextareaQuestionDocument,
  type SaveTextareaQuestionInput,
  SaveTextQuestionDocument,
  type SaveTextQuestionInput,
} from '@/gql/__generated__/graphql';

// Question type discriminators
type QuestionInput =
  | ({ __typename: 'TextQuestion' } & SaveTextQuestionInput)
  | ({ __typename: 'TextareaQuestion' } & SaveTextareaQuestionInput)
  | ({ __typename: 'IntegerQuestion' } & SaveIntegerQuestionInput)
  | ({ __typename: 'FloatQuestion' } & SaveFloatQuestionInput)
  | ({ __typename: 'ChoiceQuestion' } & SaveChoiceQuestionInput)
  | ({ __typename: 'MultipleChoiceQuestion' } & SaveMultipleChoiceQuestionInput)
  | ({ __typename: 'DateQuestion' } & SaveDateQuestionInput);

export function useSaveQuestion() {
  const [saveTextQuestion] = useMutation(SaveTextQuestionDocument);
  const [saveTextareaQuestion] = useMutation(SaveTextareaQuestionDocument);
  const [saveIntegerQuestion] = useMutation(SaveIntegerQuestionDocument);
  const [saveFloatQuestion] = useMutation(SaveFloatQuestionDocument);
  const [saveChoiceQuestion] = useMutation(SaveChoiceQuestionDocument);
  const [saveMultipleChoiceQuestion] = useMutation(
    SaveMultipleChoiceQuestionDocument,
  );
  const [saveDateQuestion] = useMutation(SaveDateQuestionDocument);

  async function saveQuestion(input: QuestionInput) {
    // Dynamic dispatch based on question type (like Ember's TYPES mapping)
    const { __typename, ...mutationInput } = input;

    switch (__typename) {
      case 'TextQuestion': {
        const result = await saveTextQuestion({
          variables: { input: mutationInput },
        });
        return result.data?.saveTextQuestion?.question;
      }
      case 'TextareaQuestion': {
        const result = await saveTextareaQuestion({
          variables: { input: mutationInput },
        });
        return result.data?.saveTextareaQuestion?.question;
      }
      case 'IntegerQuestion': {
        const result = await saveIntegerQuestion({
          variables: { input: mutationInput },
        });
        return result.data?.saveIntegerQuestion?.question;
      }
      case 'FloatQuestion': {
        const result = await saveFloatQuestion({
          variables: { input: mutationInput },
        });
        return result.data?.saveFloatQuestion?.question;
      }
      case 'ChoiceQuestion': {
        const result = await saveChoiceQuestion({
          variables: { input: mutationInput },
        });
        return result.data?.saveChoiceQuestion?.question;
      }
      case 'MultipleChoiceQuestion': {
        const result = await saveMultipleChoiceQuestion({
          variables: { input: mutationInput },
        });
        return result.data?.saveMultipleChoiceQuestion?.question;
      }
      case 'DateQuestion': {
        const result = await saveDateQuestion({
          variables: { input: mutationInput },
        });
        return result.data?.saveDateQuestion?.question;
      }
      default: {
        const exhaustiveCheck: never = __typename;
        throw new Error(`Unknown question type: ${exhaustiveCheck}`);
      }
    }
  }

  return { saveQuestion };
}
