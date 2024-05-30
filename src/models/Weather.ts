import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Weather {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ type: 'float' })
    latitude!: number

    @Column({ type: 'float' })
    longitude!: number

    @Column({ type: 'json' })
    apiOutput!: any

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
    createdAt!: Date

    @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
    updatedAt!: Date
}