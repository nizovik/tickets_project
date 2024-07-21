import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventImage } from './event-image.entity';

@Injectable()
export class EventImagesService {
    constructor(
        @InjectRepository(EventImage)
        private eventImagesRepository: Repository<EventImage>,
    ) {}

    create(eventImage: EventImage): Promise<EventImage> {
        return this.eventImagesRepository.save(eventImage);
    }

    findAll(): Promise<EventImage[]> {
        return this.eventImagesRepository.find();
    }

    findOne(id: number): Promise<EventImage> {
        return this.eventImagesRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.eventImagesRepository.delete(id);
    }
}
