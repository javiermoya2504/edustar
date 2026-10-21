'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Code2,
  Compass,
  Heart,
  LayoutDashboard,
  LogOut,
  Menu,
  PlayCircle,
  Search,
  Sparkles,
  UserRound,
  Star,
  TrendingUp,
  Users,
  X,
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'

const courses = [
  { id: 'diseno-ux', title: 'Diseño UX/UI desde cero: crea productos que enamoran', instructor: 'Sofía Ramírez', rating: '4.9', reviews: '1,248', price: '€19,99', oldPrice: '€79,99', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=85', tag: 'Más vendido', color: 'bg-rose-100 text-rose-700' },
  { id: 'javascript', title: 'JavaScript moderno: de principiante a profesional', instructor: 'Mateo Torres', rating: '4.8', reviews: '892', price: '€24,99', oldPrice: '€94,99', image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=900&q=85', tag: 'Nuevo', color: 'bg-emerald-100 text-emerald-700' },
  { id: 'productividad', title: 'Productividad real: organiza tu tiempo y energía', instructor: 'Laura Méndez', rating: '4.7', reviews: '567', price: '€14,99', oldPrice: '€59,99', image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=85', tag: 'Tendencia', color: 'bg-amber-100 text-amber-700' },
  { id: 'fotografia', title: 'Fotografía creativa: encuentra tu propia mirada', instructor: 'Nico Valdés', rating: '4.9', reviews: '734', price: '€18,99', oldPrice: '€69,99', image: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=900&q=85', tag: 'Top', color: 'bg-violet-100 text-violet-700' },
]

const categories = [
  { name: 'Diseño', courses: '2.400 cursos', icon: Compass, tone: 'bg-rose-50 text-rose-600' },
  { name: 'Desarrollo', courses: '3.100 cursos', icon: Code2, tone: 'bg-blue-50 text-blue-600' },
  { name: 'Negocios', courses: '1.850 cursos', icon: TrendingUp, tone: 'bg-emerald-50 text-emerald-600' },
  { name: 'Marketing', courses: '1.240 cursos', icon: BarChart3, tone: 'bg-amber-50 text-amber-600' },
]

function Header({ onDashboard }: { onDashboard: () => void }) {
  const [open, setOpen] = useState(false)
  const [exploreOpen, setExploreOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-6 px-5 lg:px-8">
        <Link href="#inicio" className="flex items-center gap-2.5" aria-label="Nexo inicio">
          <span className="flex size-9 items-center justify-center rounded-xl bg-slate-950 text-white shadow-lg shadow-slate-950/15"><Sparkles /></span>
          <span className="text-xl font-bold tracking-tight text-slate-950">nexo<span className="text-rose-500">.</span></span>
        </Link>
        <div className="relative hidden lg:block">
          <button onClick={() => setExploreOpen(!exploreOpen)} aria-expanded={exploreOpen} className="flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-slate-950"><Menu data-icon="inline-start" /> Explorar <ChevronDown data-icon="inline-end" /></button>
          {exploreOpen && <div className="absolute left-0 top-12 z-50 w-52 rounded-xl border border-slate-200 bg-white p-2 shadow-xl"><a href="#cursos" onClick={() => setExploreOpen(false)} className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-50">Todos los cursos</a>{categories.map(({ name }) => <a key={name} href="#cursos" onClick={() => setExploreOpen(false)} className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-50">{name}</a>)}</div>}
        </div>
        <div className="relative hidden max-w-md flex-1 md:block">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <Input className="h-11 rounded-xl border-slate-200 bg-slate-50 pl-10" placeholder="¿Qué quieres aprender hoy?" />
        </div>
        <nav className="ml-auto hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          <a href="#cursos" className="transition hover:text-slate-950">Cursos</a>
          <button onClick={onDashboard} className="transition hover:text-slate-950">Mi aprendizaje</button>
          <button aria-label="Notificaciones" className="text-slate-500 hover:text-slate-950"><Bell /></button>
          <div className="relative">
            <button onClick={() => setProfileOpen(!profileOpen)} aria-label="Abrir menú de perfil" aria-expanded={profileOpen} className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"><Avatar className="size-9"><AvatarImage src="https://i.pravatar.cc/100?img=47" alt="Perfil de Alex" /><AvatarFallback>AR</AvatarFallback></Avatar></button>
            {profileOpen && <div className="absolute right-0 top-12 z-50 w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-xl"><button onClick={() => setProfileOpen(false)} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-50"><UserRound /> Mi perfil</button><button onClick={() => setProfileOpen(false)} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-50"><LogOut /> Cerrar sesión</button></div>}
          </div>
        </nav>
        <button className="ml-auto lg:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menú">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden"><div className="flex flex-col gap-4 text-sm font-medium"><a href="#cursos" onClick={() => setOpen(false)}>Cursos</a><button className="text-left" onClick={() => { onDashboard(); setOpen(false) }}>Mi aprendizaje</button></div></div>}
    </header>
  )
}

function CourseCard({ course }: { course: typeof courses[number] }) {
  const [saved, setSaved] = useState(false)
  return <Card className="group overflow-hidden rounded-2xl border-slate-200/80 py-0 shadow-none transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50">
    <Link href={`/curso/${course.id}`} className="relative block aspect-[16/9] overflow-hidden">
      <img src={course.image} alt={course.title} className="size-full object-cover transition duration-500 group-hover:scale-105" />
      <Badge className={`absolute left-3 top-3 border-0 ${course.color}`}>{course.tag}</Badge>
      <button aria-label={saved ? 'Quitar de favoritos' : 'Guardar curso'} aria-pressed={saved} onClick={(event) => { event.preventDefault(); event.stopPropagation(); setSaved(!saved) }} className={`absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/90 backdrop-blur transition ${saved ? 'text-rose-500' : 'text-slate-600 hover:text-rose-500'}`}><Heart className={saved ? 'fill-current' : ''} /></button>
    </Link>
    <CardHeader className="gap-2 px-4 pb-1 pt-4"><CardTitle className="line-clamp-2 text-[15px] leading-5 text-slate-900"><Link href={`/curso/${course.id}`}>{course.title}</Link></CardTitle><p className="text-xs text-slate-500">{course.instructor}</p></CardHeader>
    <CardContent className="px-4 py-2"><div className="flex items-center gap-1 text-sm"><span className="font-bold text-amber-500">{course.rating}</span><span className="flex text-amber-400">★★★★★</span><span className="text-xs text-slate-400">({course.reviews})</span></div></CardContent>
    <CardFooter className="flex items-center gap-2 px-4 pb-4 pt-1"><span className="font-bold text-slate-950">{course.price}</span><span className="text-xs text-slate-400 line-through">{course.oldPrice}</span></CardFooter>
  </Card>
}

function Home({ onDashboard }: { onDashboard: () => void }) {
  return <div className="min-h-screen bg-white text-slate-950"><Header onDashboard={onDashboard} /><main id="inicio">
    <section className="relative overflow-hidden bg-[#f7f8fc]"><div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.03fr_.97fr] lg:px-8 lg:py-24"><div className="relative z-10"><Badge className="mb-5 border-0 bg-rose-100 px-3 py-1 text-rose-700">APRENDE A TU MANERA</Badge><h1 className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-6xl">Convierte tu curiosidad en <span className="text-rose-500">nuevas posibilidades.</span></h1><p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">Cursos prácticos, mentores increíbles y una comunidad que te acompaña en cada paso.</p><div className="mt-8 flex flex-wrap gap-3"><Button size="lg" className="h-12 rounded-xl bg-slate-950 px-6 hover:bg-slate-800" asChild><a href="#cursos">Explorar cursos <ArrowRight data-icon="inline-end" /></a></Button><Button size="lg" variant="outline" className="h-12 rounded-xl border-slate-200 bg-white px-6" onClick={onDashboard}>Ver mi aprendizaje</Button></div><div className="mt-10 flex items-center gap-7 text-sm text-slate-500"><div><span className="block text-xl font-bold text-slate-950">60k+</span>estudiantes activos</div><Separator orientation="vertical" className="h-9" /><div><span className="block text-xl font-bold text-slate-950">4.9/5</span>valoración media</div></div></div><div className="relative mx-auto w-full max-w-lg"><div className="absolute -right-5 -top-8 size-40 rounded-full bg-rose-200/60 blur-3xl" /><div className="absolute -bottom-8 -left-8 size-48 rounded-full bg-blue-200/70 blur-3xl" /><div className="relative grid grid-cols-2 gap-4"><div className="mt-12 overflow-hidden rounded-[28px] shadow-2xl shadow-slate-300/40"><img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=85" alt="Estudiantes aprendiendo juntos" className="aspect-[.8] w-full object-cover" /></div><div className="overflow-hidden rounded-[28px] shadow-2xl shadow-slate-300/40"><img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=700&q=85" alt="Persona trabajando en un curso" className="aspect-[.8] w-full object-cover" /></div></div><div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-xl shadow-slate-300/50"><span className="flex size-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600"><CheckCircle2 /></span><div><p className="text-xs text-slate-500">Tu próximo logro</p><p className="text-sm font-bold">Curso completado</p></div></div></div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="mb-7 flex items-end justify-between"><div><p className="mb-2 text-sm font-semibold uppercase tracking-[.18em] text-rose-500">Descubre</p><h2 className="text-3xl font-bold tracking-tight">Explora por categoría</h2></div><a href="#cursos" className="hidden items-center gap-2 text-sm font-semibold text-slate-600 hover:text-rose-500 sm:flex">Ver todas <ArrowRight /></a></div><div className="grid grid-cols-2 gap-3 md:grid-cols-4">{categories.map(({ name, courses: count, icon: Icon, tone }) => <a href="#cursos" key={name} className="group flex items-center gap-3 rounded-2xl border border-slate-200/80 p-4 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg"><span className={`flex size-11 items-center justify-center rounded-xl ${tone}`}><Icon /></span><span><span className="block font-bold">{name}</span><span className="text-xs text-slate-500">{count}</span></span></a>)}</div></section>
    <section id="cursos" className="bg-[#f7f8fc] px-5 py-16 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-8 flex items-end justify-between"><div><p className="mb-2 text-sm font-semibold uppercase tracking-[.18em] text-rose-500">Para ti</p><h2 className="text-3xl font-bold tracking-tight">Cursos que están despegando</h2></div><Button variant="ghost" className="hidden sm:flex">Ver catálogo completo <ArrowRight data-icon="inline-end" /></Button></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{courses.map((course) => <CourseCard key={course.id} course={course} />)}</div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-slate-950 p-8 text-white sm:flex-row sm:items-center sm:p-12"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[.18em] text-rose-300">Aprende con confianza</p><h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">Tu próxima gran habilidad empieza con una clase.</h2></div><Button size="lg" className="shrink-0 rounded-xl bg-white text-slate-950 hover:bg-slate-100" asChild><a href="#cursos">Empezar ahora <ArrowRight data-icon="inline-end" /></a></Button></div></section>
  </main><footer className="border-t border-slate-200 px-5 py-8 text-center text-sm text-slate-500">© 2025 nexo. Aprende algo que te mueva.</footer></div>
}

function Dashboard({ onHome }: { onHome: () => void }) {
  return <div className="min-h-screen bg-[#f7f8fc] text-slate-950"><div className="border-b border-slate-200 bg-white"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8"><button onClick={onHome} className="flex items-center gap-2.5"><span className="flex size-9 items-center justify-center rounded-xl bg-slate-950 text-white"><Sparkles /></span><span className="text-xl font-bold tracking-tight">nexo<span className="text-rose-500">.</span></span></button><div className="flex items-center gap-4"><button onClick={onHome} className="hidden text-sm font-semibold text-slate-600 hover:text-slate-950 sm:block">Explorar cursos</button><Avatar className="size-9"><AvatarImage src="https://i.pravatar.cc/100?img=47" alt="Perfil de Alex" /><AvatarFallback>AR</AvatarFallback></Avatar></div></div></div><main className="mx-auto max-w-7xl px-5 py-10 lg:px-8"><div className="mb-10"><p className="mb-2 text-sm font-semibold uppercase tracking-[.18em] text-rose-500">Mi espacio</p><h1 className="text-4xl font-bold tracking-tight">Hola, Alex <span aria-hidden="true">!</span></h1><p className="mt-2 text-slate-500">Continúa donde lo dejaste y sigue avanzando.</p></div><div className="mb-10 grid gap-4 sm:grid-cols-3"><Card className="rounded-2xl border-slate-200/80 shadow-none"><CardContent className="flex items-center gap-4 p-5"><span className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><BookOpen /></span><div><p className="text-2xl font-bold">4</p><p className="text-sm text-slate-500">Cursos en progreso</p></div></CardContent></Card><Card className="rounded-2xl border-slate-200/80 shadow-none"><CardContent className="flex items-center gap-4 p-5"><span className="flex size-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600"><Clock3 /></span><div><p className="text-2xl font-bold">12.5h</p><p className="text-sm text-slate-500">Tiempo de aprendizaje</p></div></CardContent></Card><Card className="rounded-2xl border-slate-200/80 shadow-none"><CardContent className="flex items-center gap-4 p-5"><span className="flex size-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"><CheckCircle2 /></span><div><p className="text-2xl font-bold">8</p><p className="text-sm text-slate-500">Logros conseguidos</p></div></CardContent></Card></div><div className="grid gap-8 lg:grid-cols-[1fr_330px]"><section><div className="mb-5 flex items-center justify-between"><h2 className="text-xl font-bold">Continúa aprendiendo</h2><Button variant="ghost" size="sm">Ver todos</Button></div><div className="flex flex-col gap-4"><Card className="overflow-hidden rounded-2xl border-slate-200/80 shadow-none"><CardContent className="flex flex-col gap-5 p-4 sm:flex-row"><img src={courses[0].image} alt="Diseño UX/UI" className="aspect-video w-full rounded-xl object-cover sm:size-36" /><div className="flex flex-1 flex-col justify-center"><Badge variant="secondary" className="mb-2 w-fit">Diseño</Badge><h3 className="font-bold">Diseño UX/UI desde cero: crea productos que enamoran</h3><p className="mt-1 text-sm text-slate-500">Siguiente: Wireframes que cuentan historias</p><div className="mt-4 flex items-center gap-3"><Progress value={68} className="h-2 flex-1" /><span className="text-xs font-semibold text-slate-500">68%</span></div></div><Button className="shrink-0 self-center rounded-xl bg-slate-950 hover:bg-slate-800" size="sm"><PlayCircle data-icon="inline-start" /> Continuar</Button></CardContent></Card><Card className="overflow-hidden rounded-2xl border-slate-200/80 shadow-none"><CardContent className="flex flex-col gap-5 p-4 sm:flex-row"><img src={courses[1].image} alt="JavaScript moderno" className="aspect-video w-full rounded-xl object-cover sm:size-36" /><div className="flex flex-1 flex-col justify-center"><Badge variant="secondary" className="mb-2 w-fit">Desarrollo</Badge><h3 className="font-bold">JavaScript moderno: de principiante a profesional</h3><p className="mt-1 text-sm text-slate-500">Siguiente: Funciones y alcance</p><div className="mt-4 flex items-center gap-3"><Progress value={32} className="h-2 flex-1" /><span className="text-xs font-semibold text-slate-500">32%</span></div></div><Button className="shrink-0 self-center rounded-xl bg-slate-950 hover:bg-slate-800" size="sm"><PlayCircle data-icon="inline-start" /> Continuar</Button></CardContent></Card></div></section><aside><Card className="rounded-2xl border-slate-200/80 shadow-none"><CardHeader><CardTitle className="text-lg">Tu actividad</CardTitle></CardHeader><CardContent className="flex flex-col gap-5"><div className="flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600"><TrendingUp /></span><div><p className="text-sm font-semibold">Racha de 5 días</p><p className="text-xs text-slate-500">Sigue así, vas genial</p></div></div><Separator /><div><div className="mb-2 flex justify-between text-sm"><span className="font-semibold">Meta semanal</span><span className="text-slate-500">3.2 / 5 h</span></div><Progress value={64} className="h-2" /></div><div className="rounded-xl bg-rose-50 p-4"><p className="text-sm font-bold text-rose-900">Pequeños pasos, grandes cambios.</p><p className="mt-1 text-xs leading-5 text-rose-700">Dedica 20 minutos hoy para mantener tu racha.</p></div></CardContent></Card></aside></div></main></div>
}

export default function LearnPlatform() {
  const [dashboard, setDashboard] = useState(false)
  return dashboard ? <Dashboard onHome={() => setDashboard(false)} /> : <Home onDashboard={() => setDashboard(true)} />
}
