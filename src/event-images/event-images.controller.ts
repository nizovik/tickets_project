import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { EventImagesService } from './event-images.service';
import { EventImage } from './event-image.entity';

@Controller('event-images')
export class EventImagesController {
    constructor(private readonly eventImagesService: EventImagesService) {}

    @Post()
    create(@Body() eventImage: EventImage) {
        return this.eventImagesService.create(eventImage);
    }

    @Get()
    findAll() {
        return this.eventImagesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.eventImagesService.findOne(+id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.eventImagesService.remove(+id);
    }
}
