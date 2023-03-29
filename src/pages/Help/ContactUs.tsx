import React from 'react'
import { ActionFunction, Form, redirect, useActionData } from 'react-router-dom'

function ContactUs() {
  const data = useActionData() as { error: string }
  return (
    <div>
      <h3>Contact Us</h3>
      <Form method='post' action='/help/ContactUs'>
        <label>
          <span>Your email:</span>
          <input type='email' name='email' required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name='message' required />
        </label>
        {data && data.error && <p>{data.error}</p>}
        <button>Submit</button>
      </Form>
    </div>
  )
}

export const contactAction = async ({ request }: { request: Request }) => {
  const data = await request.formData()

  const submission = {
    email: data.get('email')?.toString(),
    message: data.get('message')?.toString(),
  }

  console.log(submission)

  if (submission.message) {
    if (submission.message.length < 10) {
      return { error: 'Message should be more than 10 characters long' }
    }
  }

  return redirect('/')
}

export default ContactUs
