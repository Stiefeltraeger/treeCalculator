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
    angriffAufKRITIS.level = 6

    let attraktivitaetAPkt = new Branch('Attraktivität A. Punkt', [], true)
    attraktivitaetAPkt.level = 6

    let attraktivitaetAMittel = new Branch('Attraktivität A. Mittel', [], true)
    attraktivitaetAMittel.level = 6

    let uebersRoteLinien = new Branch('Überschreitung roter Linien', [], true)
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
    beschaffbarkeitAMittel.level = 5

    let kenntnisseEntwicklung = new Branch('Kenntnisse Entwicklung', [], true)
    kenntnisseEntwicklung.level = 5

    let ressourcenFE = new Branch('Ressourcen (Fremdentwicklung)', [], true)
    ressourcenFE.level = 5

    let beschaffbarkeitAStoffe = new Branch('Beschaffbarkeit A.Stoffe ', [], true)
    beschaffbarkeitAStoffe.level = 5

    let ressourcenEE = new Branch('Ressourcen (Eigenentwicklung)', [], true)
    ressourcenEE.level = 5

//EBENE4
    let rachegefuehle = new Branch('Rachegefühle', [hassUndRache, medialeAufmerksamkeit], false)
    rachegefuehle.logic = 'AND'
    rachegefuehle.level = 4

    let angstgefuehle = new Branch('Angstgefühle', [medialeAufmerksamkeit, angstUndSchrecken], true)
    angstgefuehle.logic = 'AND'
    angstgefuehle.level = 4

    let ortDAngreifers = new Branch('Ort des Angreifers', [], true)
    ortDAngreifers.level = 4

    let aNachverfolgbrkeit = new Branch('A. Nachverfolgbarkeit', [], false)
    aNachverfolgbrkeit.level = 4

    let fremdEntwicklung = new Branch('Fremdentwicklung', [beschaffbarkeitAMittel, kenntnisseEntwicklung, ressourcenFE], true)
    fremdEntwicklung.logic = 'AND'
    fremdEntwicklung.level = 4

    let eigenEntwicklung = new Branch('Angstgefühle', [beschaffbarkeitAStoffe, kenntnisseEntwicklung, ressourcenEE], true)
    eigenEntwicklung.logic = 'AND'
    eigenEntwicklung.level = 4

    let kenntnisseDomaene = new Branch('Kenntnisse Domäne', [], true)
    kenntnisseDomaene.level = 4

    let handhabbarkeitAMittel = new Branch('Handhabbarkeit der A. Mittel', [], true)
    handhabbarkeitAMittel.level = 4

//EBENE3
    let erpressbarkeitAngegriffener = new Branch('Erpressbarkeit des Angegriffenen', [rachegefuehle, angstgefuehle], true)
    erpressbarkeitAngegriffener.logic = 'AND'
    erpressbarkeitAngegriffener.level = 3

    let motivationAngreifer = new Branch('Motivation des Angreifers',[],true)
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
    let angriffsAbsicht = new Branch('Angriffsabsicht', [erpressbarkeitAngegriffener, motivationAngreifer], true)
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
    this.trees.push(tree1)
  }

  getTrees(): Tree[]{
    return this.trees
  }
}
