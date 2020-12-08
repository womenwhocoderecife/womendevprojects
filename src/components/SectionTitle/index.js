import React from 'react'

import { Title } from './styles.js'

export default function SectionTitle({ title, align }) {
    return (
    <Title align={align}>{title}</Title>
    )
}
