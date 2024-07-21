import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './ticket.entity';

@Injectable()
export class TicketsService {
    constructor(
        @InjectRepository(Ticket)
        private ticketsRepository: Repository<Ticket>,
    ) {}

    create(ticket: Ticket): Promise<Ticket> {
        return this.ticketsRepository.save(ticket);
    }

    findAll(): Promise<Ticket[]> {
        return this.ticketsRepository.find();
    }

    findOne(id: number): Promise<Ticket> {
        return this.ticketsRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.ticketsRepository.delete(id);
    }
}
