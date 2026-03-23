"use client";

import { useState, type ReactNode } from "react";
import {
  DocumentList,
  type DocumentListItem,
} from "@/components/v2/ui/DocumentList";
import { SectionHeader } from "@/components/v2/ui/SectionHeader";

const docTypes = [
  {
    id: "isannoitsijantodistus",
    label: "Isännöitsijäntodistus",
    hint: "Osakkaalle, ostajalle tai viranomaiselle — tilanne yhdellä asiakirjalla.",
  },
  {
    id: "kokousmateriaali",
    label: "Hallituksen kokousmateriaali",
    hint: "Esityslista, päätökset ja liitteet samaan pakettiin.",
  },
  {
    id: "tilannekatsaus",
    label: "Tilannekatsaus",
    hint: "Tiivis yhteenveto hallituksen ja isännöinnin käyttöön.",
  },
  {
    id: "huoltoraportti",
    label: "Huoltoraportti",
    hint: "Korjaukset, kierrokset ja havainnot perustuen kirjattuun tietoon.",
  },
  {
    id: "hankintayhteenveto",
    label: "Hankintayhteenveto",
    hint: "Vertailu ja päätösperusteet valmiina dokumentoituna.",
  },
] as const;

type DocTypeId = (typeof docTypes)[number]["id"];

const recentDocuments: DocumentListItem[] = [
  {
    id: "1",
    name: "Isännöitsijäntodistus",
    meta: "Muodostettu järjestelmästä · 15.3.2025",
  },
  {
    id: "2",
    name: "Hallituksen kokous 2/2025 — esityslista",
    meta: "Koottu kokousaineisto · 12.3.2025",
  },
  {
    id: "3",
    name: "Tilannekatsaus Q1",
    meta: "Yhteenveto talosta · 5.3.2025",
  },
  {
    id: "4",
    name: "Huoltoraportti — piha-alue",
    meta: "Kiertue ja havainnot · 28.2.2025",
  },
];

const pickerCardBase =
  "w-full rounded-xl border px-5 py-4 text-left transition-[border-color,background-color,box-shadow] duration-200 sm:px-6 sm:py-5";

const pickerIdle = `${pickerCardBase} border-[var(--v2-border)] bg-[var(--v2-surface-elevated)]/80 hover:border-[color-mix(in_srgb,var(--v2-border)_100%,#ffffff_20%)] hover:bg-[var(--v2-surface-elevated)]`;

const pickerActive = `${pickerCardBase} border-[color-mix(in_srgb,var(--v2-accent)_42%,var(--v2-border)_58%)] bg-[color-mix(in_srgb,var(--v2-surface-elevated)_82%,#ffffff_18%)] shadow-[0_1px_0_rgba(255,255,255,0.06)]`;

const actionGhost =
  "inline-flex items-center justify-center rounded-lg border border-[var(--v2-border)] bg-[var(--v2-surface)]/70 px-5 py-2.5 text-sm font-medium text-[var(--v2-foreground)] transition-colors hover:bg-[var(--v2-surface-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--v2-accent)]/25";

const actionPrimary =
  "inline-flex items-center justify-center rounded-lg bg-[var(--v2-accent)] px-5 py-2.5 text-sm font-semibold text-[#0a0f18] transition-[filter] duration-150 hover:brightness-[1.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--v2-accent)]/40";

function DocSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="border-b border-[var(--v2-border)] py-4 last:border-b-0 last:pb-0 first:pt-0">
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--v2-foreground-muted)]">
        {title}
      </h3>
      <div className="mt-2.5 text-sm leading-relaxed text-[var(--v2-foreground)]">
        {children}
      </div>
    </div>
  );
}

function FeaturedIsannoitsijantodistus() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--v2-accent)_28%,var(--v2-border)_72%)] bg-[color-mix(in_srgb,var(--v2-surface-elevated)_85%,#ffffff_15%)]">
      <div className="border-b border-[var(--v2-border)] bg-[var(--v2-surface)]/40 px-6 py-5 sm:px-9 sm:py-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--v2-foreground-muted)]">
          Isännöitsijäntodistus · esikatselu
        </p>
        <p className="mt-2 text-xl font-semibold tracking-tight text-[var(--v2-foreground)] sm:text-[1.35rem]">
          Asunto-osakeyhtiö Esimerkki
        </p>
        <p className="mt-1 text-sm text-[var(--v2-foreground-muted)]">
          Osoite: Esimerkkikatu 1, Helsinki · 48 huoneistoa
        </p>
        <p className="mt-3 text-xs text-[var(--v2-foreground-muted)]">
          Muodostettu järjestelmän ajantasaisista tiedoista · 18.3.2025
        </p>
      </div>
      <div className="px-6 py-6 sm:px-9 sm:py-8">
        <DocSection title="Taloyhtiön perustiedot">
          <p className="text-[var(--v2-foreground-muted)]">
            Yhtiöjärjestyksen mukainen toiminta, hallitus ja isännöitsijä
            nimetyt järjestelmän mukaan. Osakekirjanpidon ja yhtiökokousten
            tilanne kirjattu.
          </p>
        </DocSection>
        <DocSection title="Viimeisimmät korjaukset">
          <ul className="list-inside list-disc space-y-1.5 text-[var(--v2-foreground-muted)]">
            <li>LVI-järjestelmän tarkastus valmistunut — raportti liitetty</li>
            <li>Piha-alueen kunnostus: kilpailutus käynnissä, määräaika 30.3.</li>
          </ul>
        </DocSection>
        <DocSection title="Käynnissä olevat asiat">
          <p className="text-[var(--v2-foreground-muted)]">
            Hallituksen kokous 3.4.: talousennuste, huoltosopimuksen jatko ja
            esityslista valmiina kokousmateriaaliin. Avoimet tehtävät näkyvät
            samassa näkymässä kuin tämä dokumentti.
          </p>
        </DocSection>
        <DocSection title="Taloudellinen tilanne">
          <p className="text-[var(--v2-foreground-muted)]">
            Kassavirta vakaa. Talousennuste linjassa talousarvion kanssa; kolme
            laskua odottaa hallituksen hyväksyntää ennen maksuunlähetystä.
          </p>
        </DocSection>
        <DocSection title="Merkittävät havainnot">
          <p className="text-[var(--v2-foreground-muted)]">
            Ei avoimia kriittisiä huomautuksia kiinteistöstä. Huollon
            budjettipoikkeama kirjattu selvitettäväksi seuraavassa kokouksessa.
          </p>
        </DocSection>
      </div>
    </div>
  );
}

function AlternatePreview({ label }: { label: string }) {
  return (
    <div className="rounded-2xl border border-[var(--v2-border)] bg-[var(--v2-surface-elevated)]/70 px-6 py-8 sm:px-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--v2-foreground-muted)]">
        {label}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-[var(--v2-foreground)]">
        Rakenne ja otsikot täyttyvät taloyhtiön kirjauksista — ei erillistä
        koostamista taulukoista tai sähköposteista. Muokkaa tekstiä tai lisää
        liitteitä ennen jakamista tai tallennusta.
      </p>
      <ul className="mt-5 space-y-2.5 text-sm text-[var(--v2-foreground-muted)]">
        <li className="flex gap-2.5">
          <span className="text-[var(--v2-accent)]" aria-hidden>
            ·
          </span>
          Sisältö perustuu samaan tietoon kuin talous ja tehtävät
        </li>
        <li className="flex gap-2.5">
          <span className="text-[var(--v2-accent)]" aria-hidden>
            ·
          </span>
          Hallitus ja isännöinti näkevät yhdenmukaisen version
        </li>
        <li className="flex gap-2.5">
          <span className="text-[var(--v2-accent)]" aria-hidden>
            ·
          </span>
          Valmis PDF yhdellä painalluksella
        </li>
      </ul>
    </div>
  );
}

export default function V2DokumentitPage() {
  const [selected, setSelected] = useState<DocTypeId>("isannoitsijantodistus");

  const selectedLabel = docTypes.find((d) => d.id === selected)?.label ?? "";

  return (
    <div className="space-y-0 pb-12">
      <header className="max-w-3xl space-y-4 pb-16 sm:pb-20">
        <h1 className="text-balance text-2xl font-semibold tracking-tight text-[var(--v2-foreground)] sm:text-[1.85rem] sm:leading-snug">
          Dokumentit ja raportit
        </h1>
        <p className="text-pretty text-[15px] leading-relaxed text-[var(--v2-foreground-muted)] sm:text-lg">
          Kaikki taloyhtiön dokumentit yhdessä paikassa — valmiina tai
          järjestelmän tiedoista muodostettuna.
        </p>
        <p className="max-w-2xl text-sm leading-relaxed text-[var(--v2-foreground-muted)]">
          Hallitus ja isännöinti käyttävät samaa lähdettä: dokumentit eivät ole
          irrallisia tiedostoja, vaan kooste siitä, mitä järjestelmässä jo on.
        </p>
      </header>

      <section
        aria-labelledby="luo-dokumentti-heading"
        className="border-t border-[var(--v2-border)] pt-14 sm:pt-16"
      >
        <SectionHeader
          id="luo-dokumentti-heading"
          title="Luo dokumentti"
          description="Valitse asiakirjatyyppi. Sisältö rakentuu taloyhtiön kirjatuista tiedoista — sama näkymä, jota käytätte muutenkin."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {docTypes.map((d) => {
            const on = selected === d.id;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setSelected(d.id)}
                className={on ? pickerActive : pickerIdle}
              >
                <span className="block text-[15px] font-semibold leading-snug text-[var(--v2-foreground)]">
                  {d.label}
                </span>
                <span className="mt-2 block text-sm leading-snug text-[var(--v2-foreground-muted)]">
                  {d.hint}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section
        aria-labelledby="esikatselu-heading"
        className="mt-20 space-y-6 border-t border-[var(--v2-border)] pt-16 sm:mt-24 sm:space-y-8 sm:pt-20"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0 max-w-xl space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--v2-foreground-muted)]">
              Esikatselu
            </p>
            <h2
              id="esikatselu-heading"
              className="text-xl font-semibold tracking-tight text-[var(--v2-foreground)] sm:text-2xl"
            >
              {selected === "isannoitsijantodistus"
                ? "Isännöitsijäntodistus"
                : selectedLabel}
            </h2>
            {selected === "isannoitsijantodistus" ? (
              <p className="text-sm leading-relaxed text-[var(--v2-foreground-muted)]">
                Tyypillisin käyttö: osakkaan tai ostajan tiedoksi. Alla näkyvä
                rakenne muodostuu suoraan järjestelmän kentistä ja tapahtumista.
              </p>
            ) : (
              <p className="text-sm leading-relaxed text-[var(--v2-foreground-muted)]">
                Esimerkki siitä, miten muut asiakirjat käyttävät samaa
                tietopohjaa.
              </p>
            )}
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-2 lg:justify-end">
            <button type="button" className={actionPrimary}>
              Esikatsele
            </button>
            <button type="button" className={actionGhost}>
              Muokkaa
            </button>
            <button type="button" className={actionGhost}>
              Lataa PDF
            </button>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-[var(--v2-foreground-muted)]">
          Tämä dokumentti muodostuu järjestelmän tiedoista ilman manuaalista
          koostamista.
        </p>

        <div className="pt-2">
          {selected === "isannoitsijantodistus" ? (
            <FeaturedIsannoitsijantodistus />
          ) : (
            <AlternatePreview label={selectedLabel} />
          )}
        </div>
      </section>

      <section
        aria-labelledby="viimeisimmat-heading"
        className="mt-20 border-t border-[var(--v2-border)] pt-16 sm:mt-24 sm:pt-20"
      >
        <SectionHeader
          id="viimeisimmat-heading"
          title="Viimeisimmät dokumentit"
          description="Viimeksi muodostetut tai päivitetyt asiakirjat — sama paikka kuin luonti."
        />
        <div className="mt-8 max-w-3xl">
          <DocumentList
            items={recentDocuments}
            className="gap-3 [&_li]:rounded-xl [&_li]:border [&_li]:border-[var(--v2-border)] [&_li]:bg-[var(--v2-surface-elevated)]/80 [&_li]:py-5 [&_li]:transition-colors [&_li]:hover:bg-[var(--v2-surface-elevated)]"
          />
        </div>
      </section>
    </div>
  );
}
