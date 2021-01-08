import { FormikState, FieldInputProps, FormikValues } from 'formik'

export interface FormikFieldRender<T = FormikValues> {
  field: FieldInputProps<T>
  form: FormikState<FormikValues>
}
