"use client"
import React from 'react';
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { useForm } from 'react-hook-form';

const SignUpPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const a = async (v) => {
        console.log(v)
    }

    return (
        <div className='space-y-2'>
            <h2 className='text-center text-2xl font-semibold'>Create Account</h2>
            <h2 className='text-center text-gray-400'>Start your adventure with Wanderlust</h2>
            <Form onSubmit={handleSubmit(a)} className="flex w-90 mx-auto flex-col mt-5 gap-4" >

                <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="John Doe"  {...register("name", { required: true })}/>
            <FieldError />
          </TextField>

      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" {...register("email", { required: true })} />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password"  {...register("password", { required: true })}/>
        <FieldError />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="confirmPassword"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Confirm Password</Label>
        <Input placeholder="Confirm your password" {...register("confirmPassword", { required: true })} />
        <FieldError />
      </TextField>

      <div className="flex gap-2">
        <Button type="submit" className={'w-full'}>
          Create Account
        </Button>
      </div>
    </Form>
        </div>
    );
};

export default SignUpPage;