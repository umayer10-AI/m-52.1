"use client"
import { getId } from '@/lib/data';
import { Button, FieldError, Input, Label, ListBox, TextArea,Select, TextField } from '@heroui/react';
import React from 'react';

const Add = () => {

  const a = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const newUser = Object.fromEntries(formData.entries())
    console.log(newUser)

    await getId(newUser)
  }


    return (
        <div className="w-1/2 mx-auto bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl">
  <form onSubmit={a} className="p-10 space-y-8">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* Destination Name */}
      <div className="md:col-span-2">
        <TextField name="destinationName" isRequired>
          <Label className="text-slate-200 mb-2 block">
            Destination Name
          </Label>

          <Input
            placeholder="Bali Paradise"
            className="rounded-2xl bg-slate-800 text-white border border-slate-700 placeholder:text-slate-400"
          />

          <FieldError className="text-red-400" />
        </TextField>
      </div>

      {/* Country */}
      <TextField name="country" isRequired>
        <Label className="text-slate-200 mb-2 block">
          Country
        </Label>

        <Input
          placeholder="Indonesia"
          className="rounded-2xl bg-slate-800 text-white border border-slate-700 placeholder:text-slate-400"
        />

        <FieldError className="text-red-400" />
      </TextField>

      {/* Category */}
      <div>
        <Label className="text-slate-200 mb-2 block">
          Category
        </Label>

        <Select
          name="category"
          isRequired
          className="w-full"
          placeholder="Select category"
        >
          <Select.Trigger className="rounded-2xl bg-slate-800 text-white border border-slate-700 px-4 py-3">
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>

          <Select.Popover className="bg-slate-800 border border-slate-700 rounded-2xl">
            <ListBox className="text-white">
              <ListBox.Item id="Beach" textValue="Beach">
                Beach
              </ListBox.Item>

              <ListBox.Item id="Mountain" textValue="Mountain">
                Mountain
              </ListBox.Item>

              <ListBox.Item id="City" textValue="City">
                City
              </ListBox.Item>

              <ListBox.Item id="Adventure" textValue="Adventure">
                Adventure
              </ListBox.Item>

              <ListBox.Item id="Cultural" textValue="Cultural">
                Cultural
              </ListBox.Item>

              <ListBox.Item id="Luxury" textValue="Luxury">
                Luxury
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
      </div>

      {/* Price */}
      <TextField name="price" type="number" isRequired>
        <Label className="text-slate-200 mb-2 block">
          Price (USD)
        </Label>

        <Input
          type="number"
          placeholder="1299" 
          className="rounded-2xl bg-slate-800 text-white border border-slate-700 placeholder:text-slate-400"
        />

        <FieldError className="text-red-400" />
      </TextField>

      {/* Duration */}
      <TextField name="duration" isRequired>
        <Label className="text-slate-200 mb-2 block">
          Duration
        </Label>

        <Input
          placeholder="7 Days / 6 Nights" 
          className="rounded-2xl bg-slate-800 text-white border border-slate-700 placeholder:text-slate-400"
        />

        <FieldError className="text-red-400" />
      </TextField>

      {/* Departure Date */}
      <div className="md:col-span-2">
        <TextField name="departureDate" type="date" isRequired>
          <Label className="text-slate-200 mb-2 block">
            Departure Date
          </Label>

          <Input
            type="date"
            className="rounded-2xl bg-slate-800 text-white border border-slate-700"
          />

          <FieldError className="text-red-400" />
        </TextField>
      </div>

      {/* Image URL */}
      <div className="md:col-span-2">
        <TextField name="imageUrl" isRequired>
          <Label className="text-slate-200 mb-2 block">
            Image URL
          </Label>

          <Input
            type="url"
            placeholder="https://example.com/bali.jpg"
            className="rounded-2xl bg-slate-800 text-white border border-slate-700 placeholder:text-slate-400"
          />

          <FieldError className="text-red-400" />
        </TextField>
      </div>

      {/* Description */}
      <div className="md:col-span-2">
        <TextField name="description" isRequired>
          <Label className="text-slate-200 mb-2 block">
            Description
          </Label>

          <TextArea 
            placeholder="Describe the travel experience..."
            className="rounded-3xl bg-slate-800 text-white border border-slate-700 placeholder:text-slate-400"
          />

          <FieldError className="text-red-400" />
        </TextField>
      </div>
    </div>

    {/* Submit Button */}
    <Button
      type="submit"
      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold py-6"
    >
      Add Destination
    </Button>
  </form>
</div>
    );
};

export default Add;