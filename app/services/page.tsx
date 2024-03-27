import React from 'react'
import ServiceCard from './components/ServiceCard'
import FilledButton from '../components/FilledButton'


const services = [
  {
    title: 'Flutter App',
    text: 'Multi-platform app development with Dart',
    path: 'flutter-original.svg'
  },
  {
    title: 'Android App',
    text: 'Native Android mobile app development with Kotlin',
    path: 'android-original.svg'
  },
  {
    title: 'iOS App',
    text: 'Native iOS mobile app development with Swift',
    path: 'IOS-logo.svg'
  },
  {
    title: 'Xamarin App',
    text: 'Multi-platform app development with Xamarin.forms',
    path: 'xamarin-original.svg'
  },
  {
    title: 'Spring API',
    text: 'Restful API web service development with Spring Boot',
    path: 'Spring-Boot.svg'
  },
  {
    title: '.NET CORE API',
    text: 'Restful API web service development with .NET Core',
    path: 'dotnetcore-original.svg'
  },
  {
    title: 'Web App',
    text: 'Web app development with NextJS',
    path: 'Nextjs-logo.svg'
  }
]



export default function Services() {
  return (
    <div className='w-screen snap-start h-100vh p-2 dark:text-tan'>
      <div className='h-10vh space-y-2'>
        <h1 className='text-4xl font-bold text-center'>Services</h1>
        <p className='font-medium text-xl text-center'>Here are the services we are providing to you.</p>
      </div>
      <div className='flex flex-col justify-evenly items-center h-90vh w-screen'>
        <div className='flex flex-row justify-around items-center flex-wrap gap-2 w-full'>
          {
            services.map((item, index) => (
              <ServiceCard key={index} title={item.title} text={item.text} path={item.path} />
            ))
          }
        </div>
        <FilledButton text='Request a call'/>
      </div>
    </div>
  )
}
