import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { Ticket } from './ticket.entity';

@Controller('tickets')
export class TicketsController {
    constructor(private readonly ticketsService: TicketsService) {}

    @Post()
    create(@Body() ticket: Ticket) {
        return this.ticketsService.create(ticket);
    }

    @Get()
    findAll() {
        return this.ticketsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.ticketsService.findOne(+id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.ticketsService.remove(+id);
    }
}
