import { TechKeys } from '@/data/projects'
import { tech } from '@/data/tech'
import { twMerge } from 'tailwind-merge'

interface TechTagProps {
	name: TechKeys
}

export function TechTag({ name }: TechTagProps) {
	return (
		<span className={twMerge('flex items-center gap-1 px-2 py-1 font-semibold text-sm rounded-lg', tech[name].background, tech[name].text)}>
			{tech[name].icon}
			{tech[name].name}
		</span>
	)
}
