import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function RegisterUserForm() {
  const [subject, setSubject] = useState('');

  const validationSchema = Yup.object({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string()
      .email('E-mail inválido')
      .required('E-mail é obrigatório'),
    userStatus: Yup.string().required('Este campo é obrigatório'),
    userType: Yup.string().required('Este campo é obrigatório'),
  });

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', status: '', type: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Stack spacing={2}>
            <Field
              fullWidth
              component={TextField}
              variant="outlined"
              label="Nome"
              size="small"
              type="text"
              name="name"
              placeholder="Nome"
            />
            <ErrorMessage name="name" component="div" />
            <Field
              fullWidth
              component={TextField}
              variant="outlined"
              label="E-mail"
              size="small"
              type="email"
              name="email"
              placeholder="E-mail"
            />
            <ErrorMessage name="email" component="div" />
            <Field
              fullWidth
              label="Status"
              variant="outlined"
              size="small"
              name="userStatus"
              component={Select}
              value={subject}
              onChange={handleSubjectChange}
            >
              <MenuItem value="Ativo">Ativo</MenuItem>
              <MenuItem value="Inativo">Inativo</MenuItem>
            </Field>
            <ErrorMessage name="userStatus" component="div" />
            <Field
              fullWidth
              label="Tipo de Usuário"
              variant="outlined"
              size="small"
              name="userType"
              component={Select}
              value={subject}
              onChange={handleSubjectChange}
            >
              <MenuItem value="admin">Administrador</MenuItem>
              <MenuItem value="equipe">Equipe</MenuItem>
              <MenuItem value="fornecedor">Fornecedor</MenuItem>
              <MenuItem value="user">Usuário</MenuItem>
            </Field>
            <ErrorMessage name="userType" component="div" />
            <Button type="submit" disabled={isSubmitting}>
              Enviar
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

export default RegisterUserForm;
