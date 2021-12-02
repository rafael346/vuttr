import * as Yup from 'yup';

export const ToolsFormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  link: Yup.string().required('Link is required'),
  description: Yup.string().required('Description is required'),
  tag: Yup.string().required('Tags is required')
})