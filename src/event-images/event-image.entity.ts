import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EventImage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    eventId: number;

    @Column()
    imageUrl: string;


}
