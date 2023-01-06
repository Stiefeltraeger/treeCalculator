import { Injectable } from '@angular/core';
import {Tree} from "../model/tree";
import {Branch} from "../model/branch";

@Injectable({
  providedIn: 'root'
})
export class TreeServiceService {

  trees: Tree[]
  startingElem: Branch[]
  constructor() {
    this.trees = []
    //EBENE6
    let angriffAufKRITIS = new Branch('Angriff auf KRITIS', [], true)
    angriffAufKRITIS.value = 1
    angriffAufKRITIS.valueCalculated = true
    angriffAufKRITIS.level = 6
    let attraktivitaetAPkt = new Branch('Attraktivität A. Punkt', [], true)
    attraktivitaetAPkt.value = 3
    attraktivitaetAPkt.valueCalculated = true
    attraktivitaetAPkt.level = 6
    let attraktivitaetAMittel = new Branch('Attraktivität A. Mittel', [], true)
    attraktivitaetAMittel.value = 4
    attraktivitaetAMittel.valueCalculated = true
    attraktivitaetAMittel.level = 6
    let uebersRoteLinien = new Branch('Überschreitung roter Linien', [], true)
    uebersRoteLinien.value = 1
    uebersRoteLinien.valueCalculated = true
    uebersRoteLinien.level = 6
    //EBENE5
    let hassUndRache = new Branch('Hass & Rache', [uebersRoteLinien, attraktivitaetAMittel], true)
    hassUndRache.logic = 'AND'
    hassUndRache.level = 5
    let medialeAufmerksamkeit = new Branch('Mediale Aufmerksamkeit', [attraktivitaetAMittel, attraktivitaetAPkt], true)
    medialeAufmerksamkeit.logic = 'OR'
    medialeAufmerksamkeit.level = 5
    let angstUndSchrecken = new Branch('Angst & Schrecken', [attraktivitaetAPkt, angriffAufKRITIS], true)
    angstUndSchrecken.logic = 'AND'
    angstUndSchrecken.level = 5
    let beschaffbarkeitAMittel = new Branch('Beschaffbarkeit A. Mittel', [], true)
    beschaffbarkeitAMittel.value = 1
    beschaffbarkeitAMittel.valueCalculated = true
    beschaffbarkeitAMittel.level = 5
    let kenntnisseEntwicklung = new Branch('Kenntnisse Entwicklung', [], true)
    kenntnisseEntwicklung.value = 4
    kenntnisseEntwicklung.valueCalculated = true
    kenntnisseEntwicklung.level = 5
    let ressourcenFE = new Branch('Ressourcen (Fremdentwicklung)', [], true)
    ressourcenFE.value = 3
    ressourcenFE.valueCalculated = true
    ressourcenFE.level = 5
    let beschaffbarkeitAStoffe = new Branch('Beschaffbarkeit A.Stoffe ', [], true)
    beschaffbarkeitAStoffe.value = 5
    beschaffbarkeitAStoffe.valueCalculated = true
    beschaffbarkeitAStoffe.level = 5
    let ressourcenEE = new Branch('Ressourcen (Eigenentwicklung)', [], true)
    ressourcenEE.value = 3
    ressourcenEE.valueCalculated = true
    ressourcenEE.level = 5
    //EBENE4
    let rachegefuehle = new Branch('Rachegefühle', [hassUndRache, medialeAufmerksamkeit], false)
    rachegefuehle.logic = 'AND'
    rachegefuehle.level = 4
    let angstgefuehle = new Branch('Angstgefühle', [medialeAufmerksamkeit, angstUndSchrecken], true)
    angstgefuehle.logic = 'AND'
    angstgefuehle.level = 4
    //TODO a way to include the table
    //let aTyp = new Branch('Angreifertyp', [], true)
    //let aAbsicht = new Branch('Angreifer Absicht', [], true)
    let ortDAngreifers = new Branch('Ort des Angreifers', [], true)
    ortDAngreifers.value = 5
    ortDAngreifers.valueCalculated = true
    ortDAngreifers.level = 4
    let aNachverfolgbrkeit = new Branch('A. Nachverfolgbarkeit', [], false)
    aNachverfolgbrkeit.value = 1
    aNachverfolgbrkeit.valueCalculated = true
    aNachverfolgbrkeit.level = 4
    let fremdEntwicklung = new Branch('Fremdentwicklung', [beschaffbarkeitAMittel, kenntnisseEntwicklung, ressourcenFE], true)
    fremdEntwicklung.logic = 'AND'
    fremdEntwicklung.level = 4
    let eigenEntwicklung = new Branch('Angstgefühle', [beschaffbarkeitAStoffe, kenntnisseEntwicklung, ressourcenEE], true)
    eigenEntwicklung.logic = 'AND'
    eigenEntwicklung.level = 4
    let kenntnisseDomaene = new Branch('Kenntnisse Domäne', [], true)
    kenntnisseDomaene.value = 5
    kenntnisseDomaene.valueCalculated = true
    kenntnisseDomaene.level = 4
    let handhabbarkeitAMittel = new Branch('Angstgefühle', [], true)
    handhabbarkeitAMittel.value = 5
    handhabbarkeitAMittel.valueCalculated = true
    handhabbarkeitAMittel.level = 4
    //EBENE3
    let erpressbarkeitAngegriffener = new Branch('Erpressbarkeit des Angegriffenen', [rachegefuehle, angstgefuehle], true)
    erpressbarkeitAngegriffener.logic = 'AND'
    erpressbarkeitAngegriffener.level = 3
    let motivationAngreifer = new Branch('Motivation des Angreifers',[],true)
    motivationAngreifer.value = 5
    motivationAngreifer.valueCalculated = true
    motivationAngreifer.level = 3
    let schutzDAngr = new Branch('Schutz des Angreifers',[ortDAngreifers, aNachverfolgbrkeit],true)
    schutzDAngr.logic = 'AND'
    schutzDAngr.level = 3
    let verfuegbrAMittel = new Branch('Verfügbarkeit der A. Mittel',[fremdEntwicklung, eigenEntwicklung],true)
    verfuegbrAMittel.logic = 'OR'
    verfuegbrAMittel.level = 3
    let durchfuekeitDAngriffs = new Branch('Durchführbarkeit des Angriffs',[kenntnisseDomaene, handhabbarkeitAMittel],true)
    durchfuekeitDAngriffs.logic = 'AND'
    durchfuekeitDAngriffs.level = 3
    //EBENE2
    //TODO add logic for angriffsAbsicht
    let angriffsAbsicht = new Branch('Angriffsabsicht', [erpressbarkeitAngegriffener, motivationAngreifer], true)
    angriffsAbsicht.logic = 'AND'
    angriffsAbsicht.level = 2
    let angriffsfaehigkeit = new Branch('Angriffsfähigkeit', [schutzDAngr, verfuegbrAMittel, durchfuekeitDAngriffs], true)
    angriffsfaehigkeit.logic = 'AND'
    angriffsfaehigkeit.level = 2
    //EBENE1
    let bedrohung = new Branch('Bedrohung', [angriffsAbsicht, angriffsfaehigkeit], true)
    bedrohung.logic = 'AND'

    this.startingElem = [bedrohung]





    const tree1 = new Tree('Bsp1',[
      bedrohung, angriffsAbsicht, angriffsfaehigkeit, schutzDAngr, verfuegbrAMittel, durchfuekeitDAngriffs, erpressbarkeitAngegriffener, motivationAngreifer,
      rachegefuehle, angstgefuehle, ortDAngreifers, aNachverfolgbrkeit, fremdEntwicklung, eigenEntwicklung, kenntnisseDomaene,
      handhabbarkeitAMittel, hassUndRache, medialeAufmerksamkeit, angstUndSchrecken, beschaffbarkeitAMittel, kenntnisseEntwicklung,
      ressourcenFE, beschaffbarkeitAStoffe, kenntnisseEntwicklung, ressourcenEE, uebersRoteLinien, attraktivitaetAMittel,
      attraktivitaetAPkt, angriffAufKRITIS
    ])
    const tree2 = new Tree('Bsp2',[schutzDAngr, ortDAngreifers, aNachverfolgbrkeit])
    const tree3 = new Tree('Bsp3',[angriffsfaehigkeit, schutzDAngr, verfuegbrAMittel, durchfuekeitDAngriffs])
    this.trees.push(tree1, tree2, tree3)
  }

  getTrees(): Tree[]{
    return this.trees
  }
}