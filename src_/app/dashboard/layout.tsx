'use client'

type DashboardLayoutProps = {
    children: React.ReactNode
    analytics: React.ReactNode
    metrics: React.ReactNode
    search: React.ReactNode
}

export default function DashboardLayout(props: DashboardLayoutProps) {
    return (
        <>
            {props.children}
            <div className="flex gap-8">
                {props.analytics}
                {props.metrics}
                {props.search}
            </div>
        </>
    );
}
