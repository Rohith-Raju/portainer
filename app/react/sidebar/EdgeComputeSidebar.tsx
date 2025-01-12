import { Box, Clock, LayoutGrid, Layers } from 'lucide-react';

import { SidebarItem } from './SidebarItem';
import { SidebarSection } from './SidebarSection';

export function EdgeComputeSidebar() {
  return (
    <SidebarSection title="Edge compute">
      <SidebarItem
        to="edge.devices"
        label="Edge Devices"
        icon={Box}
        data-cy="portainerSidebar-edgeDevices"
      />
      <SidebarItem
        to="edge.groups"
        label="Edge Groups"
        icon={LayoutGrid}
        data-cy="portainerSidebar-edgeGroups"
      />
      <SidebarItem
        to="edge.stacks"
        label="Edge Stacks"
        icon={Layers}
        data-cy="portainerSidebar-edgeStacks"
      />
      <SidebarItem
        to="edge.jobs"
        label="Edge Jobs"
        icon={Clock}
        data-cy="portainerSidebar-edgeJobs"
      />
    </SidebarSection>
  );
}
