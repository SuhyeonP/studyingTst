import React from 'react';
import {render} from "@testing-library/react";
import Counter from "./component/counter";

test('check init count',()=>{
    const {getByText}=render(<Counter/>)
    const countElement=getByText('0')
    expect(countElement).toBeInTheDocument();

    const plusElement=getByText('+')
    expect(plusElement).toBeInTheDocument()

    const minusElement=getByText('-')
    expect(minusElement).toBeInTheDocument()
})