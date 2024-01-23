import React, { useState, ChangeEvent, FormEvent } from 'react';
import Registration from "@/components/Forms/Registration";
import Login from "@/components/Forms/Login";

enum FormType {
    REGISTRATION= 'REGISTRATION',
    LOGIN = "LOGIN"
}


export default function Form({formType} : {formType: FormType}) {

    let form

    if (formType === FormType.REGISTRATION) {
        form = <Registration />
    } else if (formType === FormType.LOGIN) {
        form = <Login />
    }

    return form
}