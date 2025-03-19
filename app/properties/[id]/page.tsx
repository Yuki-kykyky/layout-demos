import React from "react";
import { PropertyDetail } from "@/app/components/screen-to-code/components/v2/home/property-detail";
import { SharedLayout } from "@/app/components/shared-layout";

interface Params {
  id: string;
}

interface PageProps {
  params: Promise<Params>;
}

export default async function PropertyPage({ params }: PageProps) {
  const resolvedParams = await params;
  return (
    <SharedLayout>
      <PropertyDetail id={resolvedParams.id} />
    </SharedLayout>
  );
}
