import {BaseEntity, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Livsmedel} from "./Livsmedel";
import {Naringsamne} from "./Naringsamne";

@Entity()
export class Naringsvarde extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "double", scale: 4})
    varde: number;

    @Column({type: "int", default: 100})
    gramLivsmedel: number;

    @ManyToOne(() => Livsmedel, livsmedel => livsmedel.naringsvarden)
    livsmedel: Livsmedel;

    @ManyToOne(() => Naringsamne, naringsamne => naringsamne.naringsvarden, {eager: true})
    naringsamne: Naringsamne;
}