import {BaseEntity, Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import {Naringsvarde} from "./Naringsvarde";

@Entity()
export class Naringsamne extends BaseEntity {

    @PrimaryColumn({type: "varchar", length: 255})
    namn: string;

    @Column({type: "varchar", length: 255})
    enhet: string;

    @Column({nullable: true, type: "double"})
    K18_30: number;

    @Column({nullable: true, type: "double"})
    K31_60: number;

    @Column({nullable: true, type: "double"})
    K61_74: number;

    @Column({nullable: true, type: "double"})
    K75: number;

    @Column({nullable: true, type: "double"})
    gravida: number;

    @Column({nullable: true, type: "double"})
    ammande: number;

    @Column({nullable: true, type: "double"})
    M18_30: number;

    @Column({nullable: true, type: "double"})
    M31_60: number;

    @Column({nullable: true, type: "double"})
    M61_74: number;

    @Column({nullable: true, type: "double"})
    M75: number;

    @OneToMany(() => Naringsvarde, naringsvarde => naringsvarde.naringsamne, {cascade: ["remove"]})
    naringsvarden: Naringsvarde[];
}