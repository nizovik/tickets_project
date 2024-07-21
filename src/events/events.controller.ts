import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { EventsService } from './events.service';
import { Event } from './event.entity';

@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

    @Post()
    create(@Body() event: Event) {
        return this.eventsService.create(event);
    }

    @Get()
    findAll() {
        return this.eventsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.eventsService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() event: Event) {
        return this.eventsService.update(+id, event);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.eventsService.remove(+id);
    }
}
