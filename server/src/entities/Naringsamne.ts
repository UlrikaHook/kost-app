import {BaseEntity, Column, Entity, ManyToMany, OneToMany, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {Livsmedel} from "./Livsmedel";
import {Naringsvarde} from "./Naringsvarde";

@Entity()
export class Naringsamne extends BaseEntity {

    @PrimaryColumn({type: "varchar", length: 255})
    namn: string;

    @Column({type: "varchar", length: 255})
    enhet: string;

    @Column({nullable: true, type: "double"})
    rek: number;

    @OneToMany(() => Naringsvarde, naringsvarde => naringsvarde.naringsamne, {cascade: ["remove"]})
    naringsvarden: Naringsvarde[];
}