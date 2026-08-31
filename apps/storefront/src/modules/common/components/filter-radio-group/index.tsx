import { EllipseMiniSolid } from "@medusajs/icons"
import { Label, RadioGroup, Text, clx } from "@modules/common/components/ui"
type FilterRadioGroupProps = {
  title: string
  items: {
    value: string
    label: string
  }[]
  value: string
  handleChange: (value: string) => void
  "data-testid"?: string
}

const FilterRadioGroup = ({
  title,
  items,
  value,
  handleChange,
  "data-testid": dataTestId,
}: FilterRadioGroupProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <Text className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a35b3e]">
        {title}
      </Text>
      <RadioGroup data-testid={dataTestId} className="flex flex-col gap-1">
        {items?.map((i) => (
          <div key={i.value} className="flex items-center">
            <span
              className={clx(
                "mr-3 flex h-4 w-4 items-center justify-center rounded-full border border-[#bba696]",
                { "border-[#a35b3e]": i.value === value }
              )}
            >
              {i.value === value && (
                <EllipseMiniSolid className="text-[#a35b3e]" />
              )}
            </span>
            <RadioGroup.Item
              checked={i.value === value}
              onChange={() => handleChange(i.value)}
              className="hidden peer"
              id={i.value}
              value={i.value}
            />
            <Label
              htmlFor={i.value}
              className={clx(
                "!transform-none text-sm text-[#745d50] transition-colors hover:cursor-pointer hover:text-[#40251f]",
                {
                  "text-ui-fg-base": i.value === value,
                }
              )}
              data-testid="radio-label"
              data-active={i.value === value}
            >
              {i.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

export default FilterRadioGroup
