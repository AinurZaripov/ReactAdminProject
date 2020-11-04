// in src/users.js
import * as React from "react";
import { List, Datagrid, TextField, TextInput, Create, Edit, SimpleForm, EditButton } from 'react-admin';

export const ProductsList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="price" />
            <EditButton />
        </Datagrid>
    </List>
);

export const ProductsEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="description" />
            <TextInput source="price" />
        </SimpleForm>
    </Edit>
);

export const ProductsCreate = props => (
    <Create {...props}>
        <SimpleForm>
        <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="description" />
            <TextInput source="price" />
        </SimpleForm>
    </Create>
);