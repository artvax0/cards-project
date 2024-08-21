import React from 'react'
import Form from './Form'
import Input from './Input'

export default function CardForm({
    onSubmit,
    onReset,
    validateForm,
    title,
    errors,
    data,
    onInputChange,
}) {
    return (
        <Form
            onSubmit={onSubmit}
            onReset={onReset}
            validateForm={validateForm}
            title={title}
            styles={{ maxWidth: '800px' }}
        >
            <Input
                name="title"
                label="title"
                error={errors.title}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="subtitle"
                label="subtitle"
                error={errors.subtitle}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="description"
                label="description"
                error={errors.description}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="phone"
                label="contact phone number"
                type='phone'
                error={errors.phone}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="email"
                label="contact email"
                type='email'
                error={errors.email}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="webUrl"
                label="website"
                error={errors.webUrl}
                onChange={onInputChange}
                data={data}
                sm={6}
                required={false}
            />
            <Input
                name="imageUrl"
                label="image source link"
                error={errors.imageUrl}
                onChange={onInputChange}
                data={data}
                sm={6}
                required={false}
            />
            <Input
                name="imageAlt"
                label="image description"
                error={errors.imageAlt}
                onChange={onInputChange}
                data={data}
                sm={6}
                required={false}
            />
            <Input
                name="country"
                label="country"
                error={errors.country}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="state"
                label="state"
                error={errors.state}
                onChange={onInputChange}
                data={data}
                sm={6}
                required={false}
            />
            <Input
                name="city"
                label="city"
                error={errors.city}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="street"
                label="street"
                error={errors.street}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="houseNumber"
                label="house number"
                type='number'
                error={errors.houseNumber}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
            <Input
                name="zip"
                label="zip code"
                type='number'
                error={errors.zip}
                onChange={onInputChange}
                data={data}
                sm={6}
            />
        </Form>
    )
}
