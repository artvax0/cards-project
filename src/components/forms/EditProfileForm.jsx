import React from 'react'
import EditForm from './EditForm'
import Input from './Input'

export default function EditProfileForm({
  setOpenSettings,
  onSubmit,
  validateForm,
  errors,
  data,
  onInputChange,
}) {
  return (
    <EditForm
      setOpenSettings={setOpenSettings}
      onSubmit={onSubmit}
      validateForm={validateForm}
    >
      <Input
        name="first"
        label="first name"
        error={errors.first}
        onChange={onInputChange}
        data={data}
      />
      <Input
        name="middle"
        label="middle name"
        error={errors.middle}
        onChange={onInputChange}
        data={data}
        required={false}
      />
      <Input
        name="last"
        label="last name"
        error={errors.last}
        onChange={onInputChange}
        data={data}
      />
      <Input
        name="phone"
        label="phone number"
        error={errors.phone}
        onChange={onInputChange}
        data={data}
      />
      <Input
        name="url"
        label="image url"
        error={errors.url}
        onChange={onInputChange}
        data={data}
      />
      <Input
        name="alt"
        label="image alt"
        error={errors.alt}
        onChange={onInputChange}
        data={data}
      />
      <Input
        name="country"
        label="country"
        error={errors.country}
        onChange={onInputChange}
        data={data}
      />
      <Input
        name="state"
        label="state"
        error={errors.state}
        onChange={onInputChange}
        data={data}
        required={false}
      />
      <Input
        name="city"
        label="city"
        error={errors.city}
        onChange={onInputChange}
        data={data}
      />
      <Input
        name="street"
        label="street"
        error={errors.street}
        onChange={onInputChange}
        data={data}
      />
      <Input
        name="houseNumber"
        label="house number"
        error={errors.houseNumber}
        onChange={onInputChange}
        data={data}
      />
      <Input
        name="zip"
        label="zip"
        error={errors.zip}
        onChange={onInputChange}
        data={data}
      />
    </EditForm>
  )
}
