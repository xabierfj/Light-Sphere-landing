export const SITE_URL = 'https://www.lightsphereoptics.com';

export interface Section {
	id: string;
	label: string;
	inNav?: boolean;
}

export interface Step {
	number: string;
	title: string;
	desc: string;
}

export interface SeoData {
	siteName: string;
	title: string;
	description: string;
	author: string;
	keywords: string;
	releaseDate: string;
}

export interface Spec {
	id: string;
	title: string;
	detail: string;
	part: string;
	value?: string;
	unit?: string;
	benefit?: string;
	headline?: string;
	tag?: string;
	items?: string[];
}

export interface Product {
	code: string;
	category: 'Lentillas' | 'Cirugía';
	figure: 'lens' | 'color' | 'motion' | 'myopia' | 'cataract';
	name: string;
	desc: string;
	specs?: string[];
}

export interface Location {
	branch: string;
	isPrincipal: boolean;
	code: string;
	address: string;
	city: string;
	timezone: string;
	openingHours: string;
}

export interface Faq {
	question: string;
	answer: string;
}

export const SEO = {
	siteName: 'LightSphere Optics',
	title: 'LightSphere Optics - Premium Optics Solutions',
	description: 'Descubre LightSphere Optics, la mejor solución en óptica premium.',
	author: 'SaraCS',
	keywords: 'LightSphere, Libro True colors, SaraCS, true colors',
	releaseDate: '2026-10-26',
} satisfies SeoData;


export const SECTIONS: Section[] = [
	{ id: 'inicio', label: 'Inicio' },
	{ id: 'implante', label: 'El implante', inNav: true },
	{ id: 'colores', label: 'Colores', inNav: true },
	{ id: 'tecnologia', label: 'Tecnología', inNav: true },
	{ id: 'faq', label: 'Preguntas' },
	{ id: 'beta', label: 'Beta' },
	{ id: 'productos', label: 'Productos', inNav: true },
	{ id: 'sedes', label: 'Sedes', inNav: true },
	{ id: 'precio', label: 'Precio', inNav: true },
];

export const steps: Step[] = [
	{
		number: '01',
		title: 'Entrada por las narinas',
		desc: 'Sin cortes visibles en el rostro.',
	},
	{
		number: '02',
		title: 'Pequeña incisión',
		desc: 'En los senos paranasales.',
	},
	{ number: '03', title: 'Conexión al nervio óptico', desc: 'Solo en un ojo.' },
	{ number: '04', title: 'Cierre con grapa quirúrgica', desc: 'Fin de la intervención.' },
];

export const about: Step[] = [
	{
		number: '01',
		title: 'Ves todo normal',
		desc: 'Nada cambia en tu día a día.',
	},
	{
		number: '02',
		title: 'Nadie lo nota',
		desc: 'No hay ninguna señal externa de que lo tengas.',
	},
	{
		number: '03',
		title: 'Cuando aparece esa persona…',
		desc: 'Ves un aura de color a su alrededor. Solo tú la ves, solo en esa persona, y su color no cambia.',
	},
];

export const specs: Spec[] = [
	{
		id: 'grosor',
		value: '0,5',
		unit: 'mm',
		title: 'Grosor del implante',
		benefit: 'Más fino que una uña humana.',
		detail: 'Circuitos, procesador y batería van comprimidos en un polímero de grado médico.',
		part: 'hydrogel',
	},
	{
		id: 'procesador',
		headline: 'ARM Cortex-M0',
		tag: '32 bit',
		title: 'Procesador',
		benefit: 'Diseñado para procesar datos hormonales con un consumo mínimo.',
		detail: 'El bajo consumo busca limitar el calor cerca del tejido ocular.',
		part: 'chip',
	},
	{
		id: 'hormonas',
		items: ['Dopamina', 'Oxitocina', 'Adrenalina'],
		title: 'Hormonas leídas',
		detail: 'Nuestra hipótesis: son las tres que se disparan cuando aparece esa persona. En estudio.',
		part: 'chip',
	},
	{
		id: 'biocompatibilidad',
		title: 'Biocompatibilidad',
		benefit: 'Polímero pensado para contacto prolongado con el tejido ocular.',
		detail: 'Certificado conforme a ISO 10993 (evaluación biológica de productos sanitarios).',
		part: 'base',
	},
];

export const products: Product[] = [
	{
		code: 'LS-100',
		category: 'Lentillas',
		figure: 'lens',
		name: 'Lentillas normales',
		desc: 'Graduadas para ver en el día a día.',
	},
	{
		code: 'LS-200',
		category: 'Lentillas',
		figure: 'color',
		name: 'Lentillas de colores',
		desc: 'Cambia el color de tus ojos cuando quieras, sin maquillaje.',
	},
	{
		code: 'LS-300',
		category: 'Lentillas',
		figure: 'motion',
		name: 'Lentillas con efectos de movimiento',
		desc: 'Efectos visuales en movimiento para disfraces, Halloween y similares.',
		specs: ['pantalla [PANTALLA]', 'batería de alta capacidad', 'chip de procesamiento de imagen'],
	},
	{
		code: 'LS-400',
		category: 'Cirugía',
		figure: 'myopia',
		name: 'Cirugía de miopía',
		desc: 'Corrige la miopía para que dejes de depender de gafas y lentillas.',
	},
	{
		code: 'LS-500',
		category: 'Cirugía',
		figure: 'cataract',
		name: 'Cirugía de cataratas y operaciones similares',
		desc: 'Recupera una visión nítida con nuestro equipo quirúrgico.',
	},
];

export const locations: Location[] = [
	{
		branch: 'Washington DC',
		isPrincipal: true,
		code: 'WDC',
		address: '1101 4th St SW, Washington, DC 20024, USA',
		city: 'Washington',
		timezone: 'America/New_York',
		openingHours: 'Lunes a viernes, 9:00–17:00',
	},
	{
		branch: 'Nueva York',
		isPrincipal: false,
		code: 'NYC',
		address: '47 W 34th St., New York, NY 10001, USA',
		city: 'Nueva York',
		timezone: 'America/New_York',
		openingHours: 'Lunes a viernes, 9:00–17:00',
	},
	{
		branch: 'Boston',
		isPrincipal: false,
		code: 'BOS',
		address: '109 Newbury St, Boston, MA 02116, USA',
		city: 'Boston',
		timezone: 'America/New_York',
		openingHours: 'Lunes a viernes, 9:00–17:00',
	},
	{
		branch: 'Los Ángeles',
		isPrincipal: false,
		code: 'LAX',
		address: '311 Rodeo Dr, Beverly Hills, CA 90210, USA',
		city: 'Los Ángeles',
		timezone: 'America/Los_Angeles',
		openingHours: 'Lunes a viernes, 9:00–17:00',
	},
];

export const faqs: Faq[] = [
	{
		question: '¿Se nota el implante True Colors?',
		answer: 'No. Nadie va a notar que lo tienes implantado.',
	},
	{
		question: '¿Puede ver el aura otra persona?',
		answer: 'No. El aura solo la ve quien lleva el implante. Para los demás no hay nada que ver.',
	},
	{
		question: '¿Puede cambiar el color?',
		answer: 'No. Cada portador ve un color propio, y ese color no cambia.',
	},
	{
		question: '¿Cómo se coloca el implante True Colors?',
		answer: 'Se coloca mediante una pequeña incisión en los senos paranasales, sin cortes visibles en el rostro.',
	},
	{
		question: '¿Es seguro el implante True Colors?',
		answer: 'Sí. El implante es biocompatible y no genera rechazo.',
	},
	{
		question: '¿Necesito graduarme la vista para el implante True Colors?',
		answer:
			'Si necesitas corrección visual, la combinaremos con tu graduación sin coste adicional.',
	},
	{
		question: '¿Quién puede probarlo gratis?',
		answer: 'Solo los clientes que ya estaban en nuestra lista de clientes habituales, hasta el 20 de septiembre de 2033. El resto puede esperar a que se lance el producto.',
	},
];
