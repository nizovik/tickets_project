import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ticket {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    eventId: number;

    @Column()
    userId: number;

    @Column()
    price: number;


}
