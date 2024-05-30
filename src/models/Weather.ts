import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Weather {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    lat!: string

    @Column()
    long!: string

    @Column()
    apiOutput!: string

    @Column({ type: "datetime" })
    createdAt!: Date

    @Column({ type: "datetime" })
    updatedAt!: Date
}