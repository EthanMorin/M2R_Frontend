<script setup lang="ts">
	import type { Listing } from "~/types/listing";
  
	const data = await useFetch("/api/listings");
	listing = data.data.value;
</script>

<template>
  <div v-if="listing" class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <!-- Basic Info -->
    <div class="space-y-4">
      <h1 class="text-3xl font-bold text-gray-900">
        {{ listing.address.unparsedAddress }}
      </h1>
      
      <div class="text-2xl font-semibold text-gray-900">
        ${{ listing.currentPrice?.toLocaleString() }}
      </div>
    </div>

    <!-- Property Details -->
    <div class="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div class="bg-white p-4 rounded-lg shadow">
        <span class="text-gray-500 text-sm">Beds</span>
        <div class="text-xl font-semibold">{{ listing.bedsTotal }}</div>
      </div>
      <div class="bg-white p-4 rounded-lg shadow">
        <span class="text-gray-500 text-sm">Baths</span>
        <div class="text-xl font-semibold">{{ listing.bathsTotal }}</div>
      </div>
      <div class="bg-white p-4 rounded-lg shadow">
        <span class="text-gray-500 text-sm">Sq Ft</span>
        <div class="text-xl font-semibold">{{ listing.buildingAreaTotal?.toLocaleString() }}</div>
      </div>
      <div class="bg-white p-4 rounded-lg shadow">
        <span class="text-gray-500 text-sm">Year Built</span>
        <div class="text-xl font-semibold">{{ listing.yearBuilt }}</div>
      </div>
    </div>

    <!-- Description -->
    <div class="mt-8">
      <h3 class="text-xl font-semibold mb-4">Description</h3>
      <p class="text-gray-700 leading-relaxed">{{ listing.publicRemarks }}</p>
    </div>

    <!-- Additional Details -->
    <div class="mt-8">
      <h3 class="text-xl font-semibold mb-4">Additional Details</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white p-4 rounded-lg shadow">
          <span class="text-gray-500">Property Type</span>
          <div class="font-semibold">{{ listing.propertyType }} - {{ listing.propertySubType }}</div>
        </div>
        <div class="bg-white p-4 rounded-lg shadow">
          <span class="text-gray-500">Status</span>
          <div class="font-semibold">{{ listing.standardStatus }}</div>
        </div>
        <div v-if="listing.associationFee" class="bg-white p-4 rounded-lg shadow">
          <span class="text-gray-500">HOA Fee</span>
          <div class="font-semibold">${{ listing.associationFee }}/{{ listing.associationFeeFrequency }}</div>
        </div>
        <div v-if="listing.lotSizeAcres" class="bg-white p-4 rounded-lg shadow">
          <span class="text-gray-500">Lot Size</span>
          <div class="font-semibold">{{ listing.lotSizeAcres }} acres</div>
        </div>
        <div v-if="listing.garageSpaces" class="bg-white p-4 rounded-lg shadow">
          <span class="text-gray-500">Garage Spaces</span>
          <div class="font-semibold">{{ listing.garageSpaces }}</div>
        </div>
        <div class="bg-white p-4 rounded-lg shadow">
          <span class="text-gray-500">Listing Agent</span>
          <div class="font-semibold">{{ listing.listingAgent.fullName }}</div>
          <div class="text-sm text-gray-500">{{ listing.listingAgent.officeName }}</div>
        </div>
      </div>
    </div>

    <!-- Schools -->
    <div class="mt-8">
      <h3 class="text-xl font-semibold mb-4">Schools</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white p-4 rounded-lg shadow">
          <span class="text-gray-500">Elementary</span>
          <div class="font-semibold">{{ listing.elementarySchool || 'N/A' }}</div>
        </div>
        <div class="bg-white p-4 rounded-lg shadow">
          <span class="text-gray-500">Middle School</span>
          <div class="font-semibold">{{ listing.middleOrJuniorSchool || 'N/A' }}</div>
        </div>
        <div class="bg-white p-4 rounded-lg shadow">
          <span class="text-gray-500">High School</span>
          <div class="font-semibold">{{ listing.highSchool || 'N/A' }}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Loading State -->
  <div v-else class="flex justify-center items-center min-h-screen">
    <div class="text-xl text-gray-600">Loading listing details...</div>
  </div>
</template>