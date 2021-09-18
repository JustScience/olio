import React from 'react'
import Contain from '../Contain'

import { 
    FormWrap, 
    Form, 
    FormTitle, 
    FormField 
} from './style'

export default function Contact() {
    return (
        <Contain>
            <FormWrap> 
                <Form action="/api/airtable" method="POST">
                    <FormTitle>Send a Message</FormTitle>
                    <FormField>
                        <label htmlFor="name">Name:</label>
                        <input name="name" id="name" />
                    </FormField>
                    <FormField>
                        <label htmlFor="email">Email:</label>
                        <input name="email" id="email" type="email" />
                    </FormField>
                    <FormField>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" id="message" />
                    </FormField>
                    <FormField>
                        <button>Send Message</button>
                    </FormField>
                </Form>
            </FormWrap>
        </Contain>
    )
}
