import { useState, useEffect } from 'react';
import localForage from 'localforage';

import { ChevronRightIcon, StarIcon } from '@heroicons/react/solid'
import Image from 'next/image';
export default function Example() {
    const [email, setEmail] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const registered = await localForage.getItem('registered');
            setIsRegistered(!!registered);
        };
        getData();
    }, []);
    const isEmailValid = (possibleEmail) => {
        const emailPattern = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;
        return emailPattern.test(possibleEmail);
    };

    const submitEmail = async (e) => {
        e.preventDefault();
        if (isEmailValid(email)) {
            await fetch(`/api/convertkit?email=${encodeURIComponent(email)}`);
            setEmail('');
            localForage.setItem('registered', true);
            setIsRegistered(true);
        } else {
            window.alert('Invalid email format');
        }
    };
    return (
        <div className="bg-white ">
            <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-24">
                <div className="mx-auto max-w-md  sm:max-w-3xl lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
                    <div>
                        <div className="mt-20">
                            <div className="mt-6 sm:max-w-xl">
                                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                                    Hi, I'm Drew 👋
                </h1>
                                <p style={{ marginTop: '16px' }} className="text-xl text-gray-500">
                                    I write about modern web dev, building and growing SaaS apps, and interesting things I find on the internet.
                </p>
                                {isRegistered && (
                                    <div className="flex justify-center items-center pt-8 ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className="h-8 w-8 text-green-500"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <p className="pl-1 text-xl font-extrabold text-gray-700 tracking-tight">
                                            Thanks for signing up!
            </p>
                                    </div>
                                )}
                            </div>
                            {!isRegistered && (
                                <form action="#" style={{ marginTop: '16px' }} className="mt-12 sm:max-w-lg sm:w-full sm:flex">
                                    <div className="min-w-0 flex-1">
                                        <label htmlFor="hero_email" className="sr-only">
                                            Email address
                  </label>
                                        <input
                                            id="hero_email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="mt-4 sm:mt-0 sm:ml-3">
                                        <button
                                            type="submit"
                                            onClick={submitEmail}
                                            className="block w-full rounded-md border border-transparent px-5 py-3 bg-blue-600 text-base font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:px-10"
                                        >
                                            Notify me
                  </button>
                                    </div>
                                </form>)}
                            <div style={{ marginTop: '12px' }} className="mt-6">
                                <div className="inline-flex items-center divide-x divide-gray-300">
                                    <div className="flex-shrink-0 flex pr-5">
                                        <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                                        <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                                        <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                                        <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                                        <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                                    </div>
                                    <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                                        <span className="font-medium text-gray-900">Recent review: </span> <span className="italic">Loved your article!</span>{' — '}
                                        <span className="font-medium text-blue-600">My mom.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
                    <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <div className="hidden sm:block">
                            <div className="absolute inset-y-0 left-1/2 w-screen bg-blue-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
                            <svg
                                className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                                width={404}
                                height={392}
                                fill="none"
                                viewBox="0 0 404 392"
                            >
                                <defs>
                                    <pattern
                                        id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={2} height={2} className="text-blue-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
                            </svg>
                        </div>
                        <div className="relative sm:max-w-sm sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                            <Image
                                className="w-full rounded-full ring-2 ring-blue-500 ring-opacity-10 lg:h-full lg:w-auto lg:max-w-none"
                                src="/drew-smaller.jpg"
                                alt=""
                                height="354"
                                width="354"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}