<script lang="ts">
  import { enhance } from "$app/forms";
  import { route } from "$lib/ROUTES";
  import { AppBar, AppShell, Avatar, popup } from "@skeletonlabs/skeleton";
  import type { PopupSettings } from "@skeletonlabs/skeleton";
  import type { LayoutData } from "./$types";
  import Icon from "@iconify/svelte";
  // import { Notification } from "$lib/components/ui";
  // import { UserNav } from "$lib/components";

  interface Props {
    data: LayoutData;
    children?: import('svelte').Snippet;
  }

  let { data, children }: Props = $props();

  const popupQuery: PopupSettings = {
    event: "click",
    target: "popupQuery",
    placement: "bottom",
  };
</script>

<AppShell slotPageHeader="sticky top-0 z-10">
  {#snippet pageHeader()}
  
      <AppBar>
        {#snippet lead()}
            <button class="btn btn-sm md:hidden"
              ><Icon
                icon="icon-park-outline:hamburger-button"
                width="48"
                height="48"
              />
            </button>

            <a href={route("/")} class="hidden md:block"
              ><h2 class="h2">
                <span class="text-primary-800 dark:text-dark-token">Byte</span><span
                  class="text-red-700"
                  >Minds
                </span>
              </h2></a
            >
          {/snippet}

        <!-- <UserNav /> -->

        {#snippet trail()}
          
            <!-- <a class="btn-icon hover:variant-soft-primary" href="/"
              ><Notification notify="10" /></a
            > -->

            <button class="btn hover:variant-soft-primary" use:popup={popupQuery}>
              <span class="hidden md:block capitalize"
                >{data.firstName}
                {data.lastName}
              </span>
              <span class="md:hidden"
                ><Avatar
                  initials={`${data.firstName.charAt(0).toUpperCase()}${data.lastName.charAt(0).toUpperCase()}`}
                  background="bg-primary-500"
                  width="w-10"
                /></span
              >
            </button>

            <div
              class="card p-2 max-w-sm variant-filled-secondary"
              data-popup="popupQuery"
            >
              <form method="post" action={route("default /logout")} use:enhance>
                <button class="btn hover:variant-filled-error">Logout</button>
              </form>
              <div class="arrow bg-surface-100-800-token"></div>
            </div>
          
          {/snippet}
      </AppBar>
    
  {/snippet}

  {@render children?.()}
</AppShell>
