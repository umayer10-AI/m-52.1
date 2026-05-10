"use client"
import { updateUSer } from '@/lib/data';
import { Envelope } from '@gravity-ui/icons';
import { Button, FieldError, Input, Label,Select, ListBox, Modal, Surface, TextArea, TextField } from '@heroui/react';
import React from 'react';

const EditBtn = ({id,p}) => {

    const a = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const editUser = Object.fromEntries(formData.entries())
        // console.log(editUser)

        await updateUSer(id,editUser)
    }

    return (
        <Modal>
        <Button className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-xl font-bold text-sm hover:bg-gray-200 transition">
                <i className="fa-regular fa-pen-to-square"></i> Edit
            </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>

              <Modal.Heading className='text-center mb-2 text-cyan-500 font-bold'>Contact Us</Modal.Heading>
  
            </Modal.Header>
            <Modal.Body>
              <Surface variant="default">
                <form onSubmit={a} className="p-5 space-y-5">
                
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                      {/* Destination Name */}
                      <div className="md:col-span-2">
                        <TextField name="destinationName" defaultValue={p.destinationName} isRequired>
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
                      <TextField name="country" defaultValue={p.country} isRequired>
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
                          name="category" defaultValue={p.category}
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
                      <TextField name="price" defaultValue={p.price} type="number" isRequired>
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
                      <TextField name="duration" defaultValue={p.duration} isRequired>
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
                        <TextField name="departureDate" defaultValue={p.departureDate} type="date" isRequired>
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
                        <TextField name="imageUrl" defaultValue={p.imageUrl} isRequired>
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
                        <TextField name="description" defaultValue={p.description} isRequired>
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
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type='submit' slot="close">Update</Button>
            </Modal.Footer>

                  </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    );
};

export default EditBtn;