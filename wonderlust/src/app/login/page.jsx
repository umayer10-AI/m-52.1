"use client"
import React from 'react';
import {Button, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

const LoginPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const a = async (v) => {
        console.log(v)

        const { data, error } = await authClient.signIn.email({
            email: v.email,
            password: v.password,
            callbackURL: "/",
        });

        if (data) {
            alert("User signed in successfully:", data);
        }
        if (error) {
            alert(error.message);
        }

    }

    return (
        <div className='space-y-2 w-2/5 shadow-lg mx-auto mt-10 border border-slate-800 rounded-3xl shadow-cyan-600 p-8 '>
            <h2 className='text-center text-2xl font-semibold'>Login</h2>
            <Form onSubmit={handleSubmit(a)} className="flex w-90 mx-auto flex-col mt-5 gap-4" >



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


      <div className='space-y-2'>
        <div className="flex gap-2">
        <Button type="submit" size='sm' className={'w-full bg-linear-to-r from-cyan-600 to-blue-600'}>
          Login
        </Button>
      </div>

      <h2 className='text-gray-400 text-sm text-center'>Or sign up with</h2>
      <button type="button" className="w-full border border-gray-100 hover:bg-gray-50 text-gray-400 font-semibold py-1.5 rounded-lg flex items-center justify-center text-sm gap-3 transition-all shadow-sm">
                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-4 h-4" alt="Google"/>
                Sign Up With Google
            </button>
      <h2 className='text-sm text-center mt-4'>Do not have an account? Sign Up <Link href="/signup" className='text-cyan-500 hover:underline font-bold'>Sign Up</Link></h2>
      </div>

    </Form>
        </div>
    );
};

export default LoginPage;