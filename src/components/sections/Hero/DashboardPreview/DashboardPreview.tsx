import "./DashboardPreview.css";

import { dashboardFlow, dashboardMetrics } from "@/constants/dashboard";

import { icons } from "@/lib/icons";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

export function DashboardPreview() {
  return (
    <Card className="dashboard">
      <div className="dashboard__reflection" />

      <div className="dashboard__glow" />

      <div className="dashboard__noise" />
      <div className="dashboard__header">

        <div>

          <Heading
            as="h3"
            size="lg"
          >
            Fluxo de Automação
          </Heading>

          <Text
            size="sm"
            variant="secondary"
          >
            Execução em tempo real
          </Text>

        </div>

        <Badge>
          Online
        </Badge>

      </div>

      <div className="dashboard__flow">

        {dashboardFlow.map((step, index) => {

          const Icon = icons[step.icon];

          return (

            <div
              key={step.title}
              className="dashboard__step"
            >

              <div className="dashboard__step-content">

                <div className="dashboard__step-left">

                  <div className="dashboard__step-icon">

                    <Icon size={20} />

                  </div>

                  <Text>

                    {step.title}

                  </Text>

                </div>

                <span
                  className={`dashboard__status dashboard__status--${step.status}`}
                />

              </div>

              {index < dashboardFlow.length - 1 && (

                <div className="dashboard__line" />

              )}

            </div>

          );

        })}

      </div>

      <div className="dashboard__metrics">

        {dashboardMetrics.map((metric) => (

          <div
            key={metric.label}
            className="dashboard__metric"
          >

            <Heading
              as="h4"
              size="xl"
            >
              {metric.value}
            </Heading>

            <Text
              size="sm"
              variant="secondary"
            >
              {metric.label}
            </Text>

          </div>

        ))}

      </div>

    </Card>
  );
}