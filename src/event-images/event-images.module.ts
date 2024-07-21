import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventImage } from './event-image.entity';
import { EventImagesService } from './event-images.service';
import { EventImagesController } from './event-images.controller';

@Module({
    imports: [TypeOrmModule.forFeature([EventImage])],
    providers: [EventImagesService],
    controllers: [EventImagesController],
    exports: [EventImagesService],
})
export class EventImagesModule {}
