import styled from 'styled-components';
import { Form as FormikForm} from 'formik';

export const Form = styled(FormikForm)`
display: flex;
flex-direction: column;
max-width: 300px;
gap: 10px;
`;